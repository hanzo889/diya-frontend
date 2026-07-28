import { useEffect, useState } from "react";
import type { BukuHub } from "../../types/bukuHub";



export const useGetAllBukuHub = () => {
  const [bukuHub, setBukuHub] = useState<BukuHub[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/buku-hub`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
        setBukuHub(data);
      } catch (err) {
        alert(err)
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, []);
  return { data: bukuHub, loading };
};
