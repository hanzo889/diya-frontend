import React, { useEffect, useState } from "react";
import type { Anggota, RequestAnggota } from "../types/anggota";
import { useGetAllAnggota } from "../hooks/get/useGetAnggota";
export default function BukuHub() {
  //hooks
  const { data,loading } = useGetAllAnggota();
  if (loading) return <div>loading...</div>;
  return (
    <>
      {data!.map((anggota, index) => (
        <div className="card" key={index}>
          <div>{anggota.id}</div>
          <div>{anggota.no_anggota}</div>
          <div>{anggota.nama}</div>
          <div>{anggota.klasifikasi_anggota_id}</div>
          <div>{anggota.alumni}</div>
        </div>
      ))}

    </>
  );
}
