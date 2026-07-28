
import React from 'react'
import Buku from './components/Buku'
import "./App.css"
// import Denda from './components/Denda'
// import Petugas from './components/Petugas'
// import Rak from './components/Rak'
// import HargaBuku from './components/HargaBuku'
import "./App.css";

import BukuHub from "./components/BukuHub";
import Anggota from "./components/Anggota";
import Klasifikasi from "./components/Klasifikasi";
import Kategori from "./components/Kategori";
import Pinjaman from "./components/Pinjaman";
import Reservasi from "./components/Reservasi";
import ListKondisi from "./components/ListKondisi";


export default function App() {
  return(
    <div className="container">
      <div className="navbar">ini navbar</div>
      <Buku />
      <BukuHub />
      <Anggota />
      <Klasifikasi/>
      <Kategori/>
    </div>
  )
}