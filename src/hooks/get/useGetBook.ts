import { useEffect, useState } from "react";

export interface Buku {
  id: number;
  judul: string;
  list_kategori_id: number;
  stock: number;
}

export const useGetAll = () => {
  const [buku, setBuku] = useState<Buku[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/buku`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }

        console.log("before", response);

        const data = await response.json();
        console.log("after", response);
        setBuku(data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, []);
  return { data: buku, loading };
};
