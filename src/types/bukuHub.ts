export interface BukuHub {
  id: number;
  barcode: string;
  buku_id: number;
  list_kondisi_id: number;
  anggota_id: number;
  rak_id: number;
}
export interface RequestBukuHub {
  barcode: string;
  buku_id: number;
  list_kondisi_id: number;
  anggota_id: number;
  rak_id: number;
}
