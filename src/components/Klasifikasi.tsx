import React, { useEffect, useState } from "react";
import type {
  Klasifikasi,
  RequestKlasifikasi,
} from "../types/klasifikasiAnggota";
import { useGetAllKlasifikasi } from "../hooks/get/useGetKlasifikasi";
export default function Klasifikasi() {
  //hooks
  const { data, loading } = useGetAllKlasifikasi();
  if (loading) return <div>loading...</div>;
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>KLASIFIKASI</th>
          <th>MAKS BUKU</th>
          <th>MAKS HARI</th>
        </tr>
        {data!.map((klasifikasi, index) => (
          <tr className="card" key={index}>
            <td>{klasifikasi.id}</td>
            <td>{klasifikasi.klasifikasi}</td>
            <td>{klasifikasi.maks_buku}</td>
            <td>{klasifikasi.maks_hari}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
