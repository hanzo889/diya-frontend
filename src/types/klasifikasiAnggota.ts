export interface Klasifikasi {
  id: number;
  klasifikasi: number;
  maks_buku: number;
  maks_hari: number;
}
export interface RequestKlasifikasi {
  klasifikasi: number;
  maks_buku: number;
  maks_hari: number;
}
