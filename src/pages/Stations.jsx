import { DataTable } from '../components';
import useGetAllStations from '../hooks/useGetAllStations';

export default function Stations() {
  const [stations, setStations, loading] = useGetAllStations();

  return (
    <div>
      <DataTable datas={stations} setDatas={setStations} loading={loading} />
    </div>
  );
}
