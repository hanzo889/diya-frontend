import { useEffect, useState } from "react";
import type { Pinjaman } from "../../types/pinjaman";

export const useGetAllPinjaman = () => {
  const [pinjaman, setPinjaman] = useState<Pinjaman[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchPinjaman = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/pinjaman`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
        setPinjaman(data);
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPinjaman();
  }, []);
  return { data: pinjaman, loading };
};
