import { useEffect, useState } from "react";
import type { Buku } from "../../types/buku";
import type { RequestBuku } from "../../types/buku";

export const useDelete = (id: number) => {
  const [loading, setLoading] = useState<boolean>(false);

  const deleteBuku = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/buku/${id}`,
        {
          method: "DELETE",
        },
      );
      if (!response.ok) {
        throw new Error("failed to delete data");
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return { deleteBuku, loading };
};
