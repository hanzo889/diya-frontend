export interface Denda {
  id: number;
  petugas_id: number;
  list_kondisi_id: number;
  total_hari: number;
  denda: number;
  harga_buku_id: number;
  total_denda: number;
}
export interface RequestDenda {
 petugas_id: number;
  list_kondisi_id: number;
  total_hari: number;
  denda: number;
  harga_buku_id: number;
  total_denda: number;
}
