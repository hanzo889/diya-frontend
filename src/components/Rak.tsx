
import { useGetAllRak } from "../hooks/get/useGetRak";
import type { Rak } from "../types/rak";

export default function Rak() {
  //hooks
  const { data, loading } = useGetAllRak();

  if (loading) return <div>loading...</div>;
  return (
    <>
      {data!.map((rak, index) => (
        <div className="p" key={index}>
          <div>{rak.id}</div>
        <div>{rak.no_rak}</div>
         
        </div>
      ))}
    </>
  );
}
