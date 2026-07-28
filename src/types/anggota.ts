export interface Anggota {
  id: number;
  no_anggota: number;
  nama: string;
  klasifikasi_anggota_id: number;
  alumni: boolean;
}
export interface RequestAnggota {
  no_anggota: number;
  nama: string;
  klasifikasi_anggota_id: number;
  alumni: boolean;
}
