import React from "react";

import Produk from "../Component/Produk";
import Bab from "../Component/Bab";
import Asisten from "../Component/Asisten";

const Home = () => {
  return (
    <div>
      {
        <div>
          <Produk nama="Tiket Mendaki Gunung Semeru" stock="4" harga="50.000" />
          <Bab judul="Modul berapa yang anda sukai ?" />
          <Asisten
            title="Siapa asisten yang anda sukai ?"
            nama="Asisten yang anda sukai"
            modul="Modul ke berapa asisten tersebut mengampu"
            judulModul="Judul modul yang diampu asisten"
          />
        </div>
      }
    </div>
  );
};

export default Home;
