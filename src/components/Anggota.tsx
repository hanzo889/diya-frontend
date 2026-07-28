import React, { useEffect, useState } from "react";
import type { Anggota, RequestAnggota } from "../types/anggota";
import { useGetAllAnggota } from "../hooks/get/useGetAnggota";
export default function BukuHub() {
  //hooks
  const { data, loading } = useGetAllAnggota();
  if (loading) return <div>loading...</div>;
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>NO ANGGOTA</th>
          <th>NAMA</th>
          <th>KLASIFIKASI ANGGOTA ID</th>
          <th>ALUMNI</th>
        </tr>
        {data!.map((anggota, index) => (
          <tr className="card" key={index}>
            <td>{anggota.id}</td>
            <td>{anggota.no_anggota}</td>
            <td>{anggota.nama}</td>
            <td>{anggota.klasifikasi_anggota_id}</td>
            <td>{anggota.alumni}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
