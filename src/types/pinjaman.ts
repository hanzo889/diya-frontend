export interface Pinjaman {
  id: number;
  anggota_id: number;
  buku_id: number;
  tgl_pinjam: string;
  tgl_balik: string;
  petugas_pinjam_id: number;
  list_kondisi_id: number;
  petugas_balik_id;
}
export interface RequestPinjaman {
  anggota_id: number;
  buku_id: number;
  tgl_pinjam: string;
  tgl_balik: string;
  petugas_pinjam_id: number;
  list_kondisi_id: number;
  petugas_balik_id;
}
