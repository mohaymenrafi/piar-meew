import DataTable from '../components/DataTable';
import useGetAllUsers from '../hooks/useGetAllUsers';

export default function Users() {
  const [users, setUsers, loading] = useGetAllUsers();

  return (
    <div>
      <DataTable datas={users} setDatas={setUsers} loading={loading} />
    </div>
  );
}
