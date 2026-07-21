import React, { useState } from "react";
import { useGetAll } from "../hooks/get/useGetBook";
import type { RequestBuku } from "../types/buku";
import { useCreate } from "../hooks/create/useCreateBook";
export default function Buku() {
  const { data, loading } = useGetAll();
  const { postBook, loading: loadingCreate } = useCreate();
  const [request, setRequest] = useState<RequestBuku | null>(null);
  const handleSubmit = async () => {
    await postBook({
      judul: request!.judul,
      list_kategori_id: request!.list_kategori_id,
      stock: request!.stock,
    });
  };
  //  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  //   setBuku(e.target.value)
  //  }
  if (loading) return <div>loading...</div>;
  return (
    <>
      {data!.map((buku, index) => (
        <div className="card" key={index}>
          <div>{buku.id}</div>
          <div>{buku.judul}</div>
          <div>{buku.list_kategori_id}</div>
          <div>{buku.stock}</div>
        </div>
      ))}

      <form className="form-buku" action={handleSubmit}>
        <label className="label-buku">
          judul:
          <input
            type="text"
            value={request?.judul}
            onChange={(e) => {
              setRequest((b) => ({ ...b!, judul: e.target.value }));
            }}
          />
        </label>
        <label className="label-buku">
          kategori:
          <input
            type="number"
            value={request?.list_kategori_id}
            onChange={(e) => {
              setRequest((b) => ({
                ...b!,
                list_kategori_id: Number(e.target.value),
              }));
            }}
          />
        </label>
        <label className="label-buku">
          {" "}
          stock:
          <input
            type="number"
            value={request?.stock}
            onChange={(e) => {
              setRequest((b) => ({ ...b!, stock: Number(e.target.value) }));
            }}
          />
        </label>
        <button type="submit" className="button-buku">
          {loadingCreate && <p>loading...</p>}
          post
        </button>
      </form>
    </>
  );
}
