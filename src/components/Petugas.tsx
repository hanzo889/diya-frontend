import { useGetAllPetugas } from "../hooks/get/useGetpetugas";
import type { Petugas } from "../types/petugas";

export default function Petugas() {
  //hooks
  const { data, loading } = useGetAllPetugas();

  if (loading) return <div>loading...</div>;
  return (
    <>
      {data!.map((petugas, index) => (
        <div className="p" key={index}>
          <div>{petugas.id}</div>
          <div>{petugas.anggota_id}</div>
        </div>
      ))}
    </>
  );
}
