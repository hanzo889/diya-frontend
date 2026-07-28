import { useGetAllPinjaman } from "../hooks/get/useGetPinjaman";

export default function Pinjaman() {
  const { data, loading } = useGetAllPinjaman();
  if(loading) return <div>loading...</div>
  return (
    <>
      {data!.map((Pinjaman, index) => (
        <div className="card" key={index}>
          <div>{Pinjaman.id}</div>
          <div>{Pinjaman.anggota_id}</div>
          <div>{Pinjaman.buku_id}</div>
          <div>{Pinjaman.tgl_pinjam}</div>
          <div>{Pinjaman.tgl_balik}</div>
          <div>{Pinjaman.petugas_pinjam_id}</div>
          <div>{Pinjaman.list_kondisi_id}</div>
          <div>{Pinjaman.petugas_balik_id}</div>
        </div>
      ))}
    </>
  );
}
