import { DataGrid } from '@mui/x-data-grid';
import React, { useContext, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import moment from 'moment';
import { Link, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { deleteSingleUser } from '../utils/delete';
import { authContext } from '../AuthProvider/AuthProvider';

export default function DataTable({ datas, setDatas }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [authToken] = useContext(authContext);
  const location = useLocation();
  let editUrl;
  let path;
  if (location.pathname === '/') {
    editUrl = '/users/edit';
    path = 'users';
  } else if (location.pathname === '/stations') {
    editUrl = '/stations/edit';
    path = 'stations';
  }

  const handleSingleDelete = (id) => {
    swal('Please Confrim again to DELETE ', { buttons: 'Yes, DELETE' }).then(
      (value) => {
        if (value) {
          setTimeout(() => {
            setDatas(datas.filter((data) => data.id !== id));
            deleteSingleUser(id, authToken, path);
          });
        }
      }
    );
  };
  const handleSelectedRowDelete = (ids) => {
    swal('Please Confirm again to DELETE Selected', {
      buttons: 'Yes, DELETE SELECTED',
    }).then((value) => {
      if (value) {
        let filteredData = datas;
        for (const id of ids) {
          filteredData = filteredData.filter((item) => item.id !== id);
          deleteSingleUser(id, authToken, path);
        }
        setDatas(filteredData);
      }
    });
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'comment', headerName: 'Comment', width: 200 },
    {
      field: 'created_at',
      headerName: 'Created At',
      width: 100,
      renderCell: (params) => (
        <p>{moment(params.row.created_at).format('MMM Do YY')}</p>
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <div className="flex space-x-3 items-center">
          <Link to={`${editUrl}/${params.row.id}`}>
            <button
              type="button"
              className="bg-blue-400 text-white transition-all hover:bg-cus-blue px-3 py-1 rounded-md"
            >
              Edit
            </button>
          </Link>

          <AiFillDelete
            className="text-black w-5 h-5 cursor-pointer hover:text-red-500"
            onClick={() => {
              handleSingleDelete(params.row.id);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full px-3 md:px-12 pt-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-semibold text-black text-left">
          {location.pathname === '/' ? 'All Users' : 'All Stations'}
        </h2>
        <button
          onClick={() => handleSelectedRowDelete(selectedRows)}
          type="button"
          className={`bg-blue-400 hover:bg-cus-blue transition-all text-white px-4 py-2 rounded-md ${
            !!selectedRows.length ? 'visible' : 'invisible'
          }`}
        >
          Delete Selected
        </button>
      </div>

      {/* table  */}
      <div style={{ height: 527, maxWidth: '700px' }}>
        <DataGrid
          rows={datas}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          onSelectionModelChange={(rows) => setSelectedRows(rows)}
        />
      </div>
    </div>
  );
}
