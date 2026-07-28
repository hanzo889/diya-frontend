import { useEffect, useState } from "react";
import type {Rak} from "../../types/rak";



export const useGetAllRak = () => {
  const [rak, setRak] = useState<Rak[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/rak`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
        setRak(data);
      } catch (err) {
        alert(err)
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, []);
  return { data: rak, loading };
};
