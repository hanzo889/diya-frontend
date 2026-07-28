import { useEffect, useState } from "react";
import type { Klasifikasi } from "../../types/klasifikasiAnggota";



export const useGetAllKlasifikasi = () => {
  const [klasifikasi, setKlasifikasi] = useState<Klasifikasi[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/klasifikasi-anggota`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
        setKlasifikasi(data);
      } catch (err) {
        alert(err)
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, []);
  return { data: klasifikasi, loading };
};
