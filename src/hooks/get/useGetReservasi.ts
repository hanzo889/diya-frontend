import { useEffect, useState } from "react";
import type { Reservasi } from "../../types/reservasi";

export const useGetAllReservasi = () => {
  const [reservasi, setReservasi] = useState<Reservasi[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchReservasi = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/reservasi`,
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
    fetchReservasi();
  }, []);
  return { data: reservasi, loading };
};
