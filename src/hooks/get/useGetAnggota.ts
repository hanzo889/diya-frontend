import { useEffect, useState } from "react";
import type { Anggota } from "../../types/anggota";



export const useGetAllAnggota = () => {
  const [anggota, setAnggota] = useState<Anggota[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/anggota`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
        setAnggota(data);
      } catch (err) {
        alert(err)
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, []);
  return { data: anggota, loading };
};
