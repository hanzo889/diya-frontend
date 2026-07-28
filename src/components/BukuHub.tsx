import React, { useEffect, useState } from "react";
import type { BukuHub, RequestBukuHub } from "../types/bukuHub";
import { useGetAllBukuHub } from "../hooks/get/useGetBukuHub";
export default function BukuHub() {
  //hooks
  const { data,loading } = useGetAllBukuHub();
  if (loading) return <div>loading...</div>;
  return (
    <>
      {data!.map((bukuHub, index) => (
        <div className="card" key={index}>
          <div>{bukuHub.id}</div>
          <div>{bukuHub.barcode}</div>
          <div>{bukuHub.buku_id}</div>
          <div>{bukuHub.list_kondisi_id}</div>
          <div>{bukuHub.anggota_id}</div>
          <div>{bukuHub.rak_id}</div>
        </div>
      ))}

    </>
  );
}
