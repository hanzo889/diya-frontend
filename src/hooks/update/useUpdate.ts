import { useEffect, useState } from "react";
import type { Buku } from "../../types/buku";
import type { RequestBuku } from "../../types/buku";

export const useUpdate = (id: number) => {
  const [loading, setLoading] = useState<boolean>(false);

  const updateBuku = async (body: RequestBuku | null) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/buku/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      );
      if (!response.ok) {
        throw new Error("failed to update data");
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return { updateBuku, loading };
};
