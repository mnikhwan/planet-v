import React, { Component } from "react";
import { Link } from "react-router-dom";

class about extends Component {
  

  render() {
    return (
      <div className="desktop">
        <img className="stars-backgrounds" alt="Stars background" src="image/stars-background.png" />
        
        <div className="card-mid">

            
      <h2>About</h2>
      <h5>Aplikasi di buat oleh Muhammad Nurul Ikhwan</h5>
      <p>21550010 | Pendidikan Teknologi Informasi</p>
      <p>Universitas Slamet Riyadi Surakarta</p>
      <div className="by">
        <h5>Dibuat dengan</h5>
        <p>ReactJs | ExpressJS | VercelJS</p>
      </div>
      
      <Link to='/dashboard'>Kembali</Link>
        </div>
    
      </div>
    );
  }
}


export default (about);
