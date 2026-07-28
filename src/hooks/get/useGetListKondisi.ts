import { useEffect, useState } from "react";
import type { ListKondisi } from "../../types/listKondisi";

export const useGetAllListKondisi = () => {
  const [listKondisi, setReservasi] = useState<ListKondisi[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchListKondisi = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/list-kondisi`,
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
        setReservasi(data);
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    };
    fetchListKondisi();
  }, []);
  return { data: listKondisi, loading };
};
