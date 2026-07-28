import React, { useEffect, useState } from "react";
import { useGetAllKategori } from "../hooks/get/useGetKategori";
export default function Kategori() {
  //hooks
  const { data, loading } = useGetAllKategori();
  if (loading) return <div>loading...</div>;
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>KATEGORI</th>
        </tr>
        {data!.map((kategori, index) => (
          <tr className="card" key={index}>
            <td>{kategori.id}</td>
            <td>{kategori.kategori}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
