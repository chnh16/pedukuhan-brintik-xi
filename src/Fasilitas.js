import React from 'react';
import './Fasilitas.css';

function Fasilitas() {
  return (
    <div className="fasilitas">
        <h1>Fasilitas</h1>
        <div className="lap_voli">
            <p><i>Ruang Pertemuan dan Lapangan Voli</i></p>
            <img src="/img/lap_voli.jpg" alt="Lapangan Voli"></img>
        </div>
        <br></br>
        <div className="mushola">
          <p><i>Mushola Al-Fadhilah</i></p>
          <img src="/img/mushola.jpg" alt="Mushola"></img>
        </div>
        <br></br>
        <div className="pos_ronda">
          <p><i>Pos Ronda Brintik RW 23</i></p>
          <img src="/img/pos_ronda.jpg" alt="Pos Ronda"></img>
        </div>
        <br></br>
        <div className="sembada">
          <p><i>Papan Nama</i></p>
          <img src="/img/sembada.jpg" alt="Sembada"></img>
        </div>
    </div>
  );
}

export default Fasilitas;
