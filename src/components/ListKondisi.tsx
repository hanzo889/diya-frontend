import { useGetAllListKondisi } from "../hooks/get/useGetListKondisi";

export default function ListKondisi() {
  const { data, loading } = useGetAllListKondisi();
  if (loading) return <div>loading...</div>;
  return (
    <>
      {data?.map((Reservasi, index) => (
        <div className="card" key={index}>
          <div>{Reservasi.id}</div>
          <div>{Reservasi.kondisi}</div>
        </div>
      ))}
    </>
  );
}
