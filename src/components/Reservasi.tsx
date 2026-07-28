import { useGetAllReservasi } from "../hooks/get/useGetReservasi";

export default function Reservasi() {
  const { data, loading } = useGetAllReservasi();
  if (loading) return <div>loading...</div>;
  return (
    <>
      {data?.map((Reservasi, index) => (
        <div className="card" key={index}>
          <div>{Reservasi.id}</div>
          <div>{Reservasi.anggota_id}</div>
          <div>{Reservasi.buku_id}</div>
          <div>{Reservasi.batas_pengambilan}</div>
        </div>
      ))}
    </>
  );
}
