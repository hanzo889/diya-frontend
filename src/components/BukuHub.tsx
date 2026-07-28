import React, { useEffect, useState } from "react";
import type { BukuHub, RequestBukuHub } from "../types/bukuHub";
import { useGetAllBukuHub } from "../hooks/get/useGetBukuHub";
export default function BukuHub() {
  //hooks
  const { data, loading } = useGetAllBukuHub();
  if (loading) return <div>loading...</div>;
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>BARCODE</th>
          <th>BUKU ID</th>
          <th>LIST KONDISI ID</th>
          <th>ANGGOTA ID</th>
          <th>RAK ID</th>
        </tr>
        {data!.map((bukuHub, index) => (
          <tr className="card" key={index}>
            <td>{bukuHub.id}</td>
            <td>{bukuHub.barcode}</td>
            <td>{bukuHub.buku_id}</td>
            <td>{bukuHub.list_kondisi_id}</td>
            <td>{bukuHub.anggota_id}</td>
            <td>{bukuHub.rak_id}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
