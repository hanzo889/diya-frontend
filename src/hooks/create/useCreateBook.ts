import { useEffect, useState } from "react";
import type { Buku } from "../../types/buku";
import  type {RequestBuku} from "../../types/buku"

export const useCreate = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const postBook = async (body: RequestBuku| null) => {
    try {
        setLoading(true)
      const response = await fetch(`${import.meta.env.VITE_API_URL}/buku`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("failed to post data");
      }

      
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return { postBook, loading };
};
