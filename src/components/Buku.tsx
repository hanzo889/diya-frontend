import React from "react";
import { useGetAll } from "../hooks/get/useGetBook";

export default function Buku() {
  const { data, loading } = useGetAll();
  if (loading) return <div>loading...</div>;
  return (
    <>
      {data.map((buku) => (
        <div className="card" key={buku.id}>
          <div>{buku.id}</div>
          <div>{buku.judul}</div>
          <div>{buku.list_kategori_id}</div>
          <div>{buku.stock}</div>
        </div>
      ))}
    </>
  );
}
