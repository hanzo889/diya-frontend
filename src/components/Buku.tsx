import React, { useEffect, useState } from "react";
import { useGetAll } from "../hooks/get/useGetBook";
import type { Buku, RequestBuku } from "../types/buku";
import { useCreate } from "../hooks/create/useCreateBook";
import { useGetById } from "../hooks/getById/useGetById";
import { useUpdate } from "../hooks/update/useUpdate";
import { useDelete } from "../hooks/delete/useDelete";
export default function Buku() {
  const [selectBuku, setSelectBuku] = useState<Buku | null>(null);
  const [requestCreate, setRequestCreate] = useState<RequestBuku | null>(null);
  const [requestUpdate, setRequestUpdate] = useState<RequestBuku | null>(null);
  const [id, setId] = useState<number>(0);
  //hooks
  const { data, loading } = useGetAll();
  const { postBook, loading: loadingCreate } = useCreate();
  const { buku, loading: getIdLoading } = useGetById(id);
  const { updateBuku, loading: loadingUpdate } = useUpdate(id);
  const { deleteBuku, loading: laodingDelete } = useDelete(id);
  useEffect(() => {
    if (getIdLoading || !buku) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectBuku(buku);
  }, [buku, getIdLoading]);
  const handleCreate = async () => {
    await postBook({
      judul: requestCreate!.judul,
      list_kategori_id: requestCreate!.list_kategori_id,
      stock: requestCreate!.stock,
    });
  };
  //handler
  const handleDelete = async () => {
    await deleteBuku();
  };
  const handleUpdate = async () => {
    await updateBuku({
      judul: requestUpdate!.judul,
      list_kategori_id: requestUpdate!.list_kategori_id,
      stock: requestUpdate!.stock,
    });
  };
  if (loading) return <div>loading...</div>;
  return(
     <>
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>JUDUL</th>
            <th>LIST KATEGORI ID</th>
            <th>STOCK</th>
          </tr>

          {data!.map((buku, index) => (
            <tr className="card" key={index}>
              <td>{buku.id}</td>
              <td>{buku.judul}</td>
              <td>{buku.list_kategori_id}</td>
              <td>{buku.stock}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="table">
        <form className="form-buku" id="create" action={handleCreate}>
          <label className="label-buku">
            judul:
            <input
              type="text"
              value={requestCreate?.judul}
              onChange={(e) => {
                console.log(e.target);
                setRequestCreate((b) => ({ ...b!, judul: e.target.value }));
              }}
            />
          </label>
          <label className="label-buku">
            kategori:
            <input
              type="number"
              value={requestCreate?.list_kategori_id}
              onChange={(e) => {
                console.log(e.target.value);
                setRequestCreate((b) => ({
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
              value={requestCreate?.stock}
              onChange={(e) => {
                setRequestCreate((b) => ({
                  ...b!,
                  stock: Number(e.target.value),
                }));
              }}
            />
          </label>
          <button type="submit" className="button-buku">
            {loadingCreate && <p>loading...</p>}
            post
          </button>
        </form>
        <form className="form-buku" id="update" action={handleUpdate}>
          <label className="label-buku">
            judul:
            <input
              type="text"
              defaultValue={selectBuku?.judul || ""}
              onChange={(e) => {
                setRequestUpdate((b) => ({ ...b!, judul: e.target.value }));
              }}
            />
          </label>
          <label className="label-buku">
            kategori:
            <input
              type="number"
              defaultValue={selectBuku?.list_kategori_id}
              onChange={(e) => {
                setRequestUpdate((b) => ({
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
              defaultValue={selectBuku?.stock}
              onChange={(e) => {
                setRequestUpdate((b) => ({
                  ...b!,
                  stock: Number(e.target.value),
                }));
              }}
            />
          </label>
          <button type="submit" className="button-buku">
            {loadingUpdate && <p>loading...</p>}
            update
          </button>
        </form>
      </div>
      <form className="form-buku" id="create" action={handleCreate}>
        <label className="label-buku">
          judul:
          <input
            type="text"
            value={requestCreate?.judul}
            onChange={(e) => {
              console.log(e.target);
              setRequestCreate((b) => ({ ...b!, judul: e.target.value }));
            }}
          />
        </label>
        <label className="label-buku">
          kategori:
          <input
            type="number"
            value={requestCreate?.list_kategori_id}
            onChange={(e) => {
              console.log(e.target.value);
              setRequestCreate((b) => ({
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
            value={requestCreate?.stock}
            onChange={(e) => {
              setRequestCreate((b) => ({
                ...b!,
                stock: Number(e.target.value),
              }));
            }}
          />
        </label>
        <button type="submit" className="button-buku">
          {loadingCreate && <p>loading...</p>}
          post
        </button>
      </form>
      
      <table>
            <tr>
              <th>ID</th>
              <th>Judul</th>
              <th>List Kategori ID</th>
              <th>Stock</th>
            </tr>
      {data!.map((buku, index) => (
       
          
            <tr className="card" key={index}>
              <td className="td-isi">{buku.id}</td>
              <td className="td-isi">{buku.judul}</td>
              <td className="td-isi">{buku.list_kategori_id}</td>
              <td className="td-isi">{buku.stock}</td>
            </tr>
            
         
))}

     </table>
          <input
            type="radio"
            name="select"
            id={buku.id.toString()}
            onChange={() => setId(buku.id)}
          />
          <button
            type="button"
            onClick={() => {
              handleDelete();
            }}
            disabled={laodingDelete}
          >
            hapus
          </button>
       
    </>
  )
}
