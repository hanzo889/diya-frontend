import React from "react";
import Buku from "./components/Buku";
import "./App.css";
import Pinjaman from "./components/Pinjaman";
import Reservasi from "./components/Reservasi";
import ListKondisi from "./components/ListKondisi";

export default function App() {
  return (
    <div className="container">
      <div className="navbar">ini navbar</div>
      <Buku />
      {/* <Pinjaman />
      <Reservasi />
      <ListKondisi /> */}
    </div>
  );
}
