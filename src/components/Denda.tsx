import { useGetAll } from "../hooks/get/useGetDenda";
import type { Denda } from "../types/denda";

export default function Denda() {
  //hooks
  const { data, loading } = useGetAll();

  if (loading) return <div>loading...</div>;
  return (
    <>
      {data!.map((denda, index) => (
        <div className="p" key={index}>
          <div>{denda.id}</div>
          <div>{denda.petugas_id}</div>
          <div>{denda.list_kondisi_id}</div>
          <div>{denda.total_hari}</div>
          <div>{denda.denda}</div>
          <div>{denda.harga_buku_id}</div>
          <div>{denda.total_denda}</div>
        </div>
      ))}
    </>
  );
}
