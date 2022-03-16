import DataTable from '../components/DataTable';
import useGetAllUsers from '../hooks/useGetAllUsers';

export default function Users() {
  const [users, setUsers] = useGetAllUsers();

  return (
    <div>
      <DataTable datas={users} setDatas={setUsers} />
    </div>
  );
}
