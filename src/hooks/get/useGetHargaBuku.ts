import { useEffect, useState } from "react";
import type { HargaBuku} from "../../types/hargaBuku";



export const useGetAllHargaBuku = () => {
  const [hargaBuku, setHargaBuku] = useState<HargaBuku[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/harga-buku`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
        setHargaBuku(data);
      } catch (err) {
        alert(err)
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, []);
  return { data: hargaBuku, loading };
};
