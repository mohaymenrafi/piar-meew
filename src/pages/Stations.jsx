import { DataTable } from '../components';
import useGetAllStations from '../hooks/useGetAllStations';

export default function Stations() {
  const [stations, setStations] = useGetAllStations();

  return (
    <div>
      <DataTable datas={stations} setDatas={setStations} />
    </div>
  );
}
