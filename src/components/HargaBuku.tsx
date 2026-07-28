import { useGetAllHargaBuku } from "../hooks/get/useGetHargaBuku";
import type { HargaBuku } from "../types/hargaBuku";

export default function HargaBuku() {
  //hooks
  const { data, loading } = useGetAllHargaBuku();

  if (loading) return <div>loading...</div>;
  return (
    <>
      {data!.map((hargaBuku, index) => (
        <div className="p" key={index}>
          <div>{hargaBuku.id}</div>
          <div>{hargaBuku.buku_id}</div>
          <div>{hargaBuku.harga}</div>
        </div>
      ))}
    </>
  );
}
