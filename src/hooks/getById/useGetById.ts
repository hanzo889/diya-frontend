import { useEffect, useState } from "react";
import type { Buku } from "../../types/buku";
// import type { RequestBuku } from "../../types/buku";

export const useGetById = (id: number) => {
  const [buku, setBuku] = useState<Buku | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (id === 0) {
      return;
    }
    const getById = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/buku/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if (!response.ok) {
          throw new Error("failed to get data");
        }
        const data = await response.json();
        setBuku(data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    getById();
  }, [id]);
  return { buku, loading };
};
