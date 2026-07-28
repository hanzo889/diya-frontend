export interface Reservasi {
  id: number;
  anggota_id: number;
  buku_id: number;
  batas_pengambilan: string;
}
export interface RequestReservasi {
  anggota_id: number;
  buku_id: number;
  batas_pengambilan: string;
}
