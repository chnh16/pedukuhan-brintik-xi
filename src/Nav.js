import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div class="navbar-fixed">
      <nav class="nav-wrapper blue darken-3">
      <div class="container">
      <h5 class="left">Brintik</h5>
      <ul class="right">
        <li><a href="/">Home</a></li>
        <li><a href="/fasilitas">Fasilitas</a></li>
        <li><a href="/organisasi">Organisasi</a></li>
        <li><a href="#"><i class="material-icons">notifications</i></a></li>
      </ul>
      </div>
    </nav>
    </div>
  );
}

export default Nav;