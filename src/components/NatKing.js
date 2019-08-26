import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NatKing extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/music">Artists</Link>
          </nav>
        </header>
        <img
          className="logo"
          src="https://fanart.tv/fanart/music/fbe054ec-a143-4101-9e9e-64abc5ff5ac9/hdmusiclogo/cole-nat-king-56e86ec76d8a4.png"
        />
        <h2 className="top-font">Jazz and Blues Artist</h2>
        <img
          className="epikpic"
          src="https://d36uctqrso86dz.cloudfront.net/files/1819-season/_790x395_crop_center-center_80/Let-There-Be-Love-A-Celebration-of-Nat-King-Cole.jpg?mtime=20180424171510"
        />
        <p className="bio nat-font">
          Nathaniel Adams Coles (March 17, 1919 – February 15, 1965), known
          professionally as Nat King Cole, was an American jazz pianist and
          vocalist. He recorded over one hundred songs that became hits on the
          pop charts. His trio was the model for small jazz ensembles that
          followed. Cole also acted in films and on television and performed on
          Broadway. He was the first African American man to host an American
          television series.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GfAb0gNPy6s"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <footer>
          <a href="https://open.spotify.com/artist/7v4imS0moSyGdXyLgVTIV7">
            <img
              className="footer-logo"
              src="https://images.squarespace-cdn.com/content/5abd446f50a54f0de9a8504a/1557026578577-SMNT11JYYRHF2AES5KN1/spotify-240.png?content-type=image%2Fpng"
            />
          </a>
        </footer>
      </div>
    )
  }
}

export default NatKing
