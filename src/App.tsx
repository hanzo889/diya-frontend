import React from "react";
import Buku from "./components/Buku";
import "./App.css";
import BukuHub from "./components/BukuHub";
import Anggota from "./components/Anggota";
import Klasifikasi from "./components/Klasifikasi";
import Kategori from "./components/Kategori";

export default function App() {
  return (
    <div>
      <Buku />
      <BukuHub />
      <Anggota />
      <Klasifikasi/>
      <Kategori/>
    </div>
  );
}
