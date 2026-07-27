import React, { useEffect, useState } from "react";
import type { Klasifikasi, RequestKlasifikasi } from "../types/klasifikasiAnggota";
import { useGetAllKlasifikasi } from "../hooks/get/useGetKlasifikasi";
export default function Klasifikasi() {
  //hooks
  const { data,loading } = useGetAllKlasifikasi();
  if (loading) return <div>loading...</div>;
  return (
    <>
      {data!.map((klasifikasi, index) => (
        <div className="card" key={index}>
          <div>{klasifikasi.id}</div>
          <div>{klasifikasi.klasifikasi}</div>
          <div>{klasifikasi.maks_buku}</div>
          <div>{klasifikasi.maks_hari}</div>
        </div>
      ))}

    </>
  );
}
