import React from 'react';
import './Daftar.css';

function Daftar() {
  return (
    <div className="card" class="card-panel grey lighten-5">
        <h5>Daftar Akun Pengurus</h5>
        <br></br>
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="Username" id="username" type="text" class="validate"></input>
                        <label for="username">Username</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="Email" id="email" type="email" class="validate"></input>
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="Password" id="password" type="password" class="validate"></input>
                        <label for="password">Password</label>
                    </div>
                </div>
                <button class="btn waves-effect waves-light blue darken-3" type="submit" name="action">Daftar</button>
            </form>
        </div>
    </div>
  );
}

export default Daftar;
