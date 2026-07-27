import React, { useEffect, useState } from "react";
import { useGetAllKategori } from "../hooks/get/useGetKategori";
export default function Kategori() {
  //hooks
  const { data, loading } = useGetAllKategori();
  if (loading) return <div>loading...</div>;
  return (
    <>
      {data!.map((kategori, index) => (
        <div className="card" key={index}>
          <div>{kategori.id}</div>
          <div>{kategori.kategori}</div>
        </div>
      ))}
    </>
  );
}
