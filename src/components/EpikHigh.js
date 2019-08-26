import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EpikHigh extends Component {
  render() {
    return (
      <>
        <main>
          <header>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/music">Artists</Link>
            </nav>
          </header>
          <img
            className="logo"
            src="https://static1.squarespace.com/static/5beb8a1b7106992e7abaa8a4/t/5c6b867353450ac8afb8777d/1566238264660/"
          />
          <h2 className="epik-font">Korean Hip-Hop Group</h2>
          <img
            className="epikpic"
            src="https://www.hellokpop.com/wp-content/uploads/2019/02/190212_EpikHigh_02-660x400.jpg"
          />
          <p className="bio">
            Epik High (Hangul: 에픽하이) is a South Korean alternative hip hop
            group from Seoul, composed of Mithra Jin, Tablo, and DJ Tukutz. They
            are known for having combined genres and different styles of hip hop
            throughout their career, which has seen the release of eleven studio
            albums since their debut in 2003, as well as for their coverage of
            diverse lyrical themes. The group went on hiatus between 2010–2012
            whilst two of the members served mandatory military service. Upon
            their return, YG Entertainment signed Mithra Jin and DJ Tukutz on
            July 25, 2012, with Tablo having already released a solo album under
            the label.
          </p>

          <h3>Latest Album: Sleepless in _______ (2019)</h3>

          <a href="https://open.spotify.com/album/0ku3S11VuwERVu81G7m0jv">
            <img src="https://img.buzzfeed.com/buzzfeed-static/static/2019-05/1/11/campaign_images/buzzfeed-prod-web-03/epik-high-iconic-korean-hip-hop-group-used-sleepl-2-19139-1556723569-0_dblbig.jpg" />
          </a>
          <p></p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pTD9Jysi3_g"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <footer>
            <a href="https://open.spotify.com/artist/5snNHNlYT2UrtZo5HCJkiw">
              <img
                className="footer-logo"
                src="https://images.squarespace-cdn.com/content/5abd446f50a54f0de9a8504a/1557026578577-SMNT11JYYRHF2AES5KN1/spotify-240.png?content-type=image%2Fpng"
              />
            </a>
          </footer>
        </main>
      </>
    )
  }
}

export default EpikHigh
