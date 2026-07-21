export interface Buku {
  id: number;
  judul: string;
  list_kategori_id: number;
  stock: number;
}
export interface RequestBuku{
  judul: string;
  list_kategori_id: number;
  stock: number;
}