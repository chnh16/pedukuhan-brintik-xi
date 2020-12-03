import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home-text">
                <h3><b>Brintik XI</b></h3>
                <p><b>Pedukuhan Brintik merupakan salah satu wilayah administratif di Kelurahan Sidokarto, Kecamatan Godean, Kabupaten Sleman, Daerah Istimewa Yogyakarta.</b></p>
            </div>
            <div className="home-banner">
                <img src="/img/banner.png" alt="image"></img>
            </div>
            <div className="home-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KnN1RCrAmi4" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
            </div>
        </div>
    );
}

export default Home
