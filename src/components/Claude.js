import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Claude extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/music">Artists</Link>
          </nav>
        </header>
        <img src="https://www.theaudiodb.com/images/media/artist/logo/claude-debussy-4f15b02b3dde0.png" />
        <h2 className="top-font">Classical Composer</h2>
        <img
          className="epikpic"
          src="http://www.loeilsensible.com/wp-content/uploads/2018/11/claude-debussy-sur-la-plage-dhoulgate-tirage-1911-web-1080x675.jpg"
        />
        <p className="bio nat-font">
          Claude Debussy (French: [aʃil klod dəbysi];) 22 August 1862 – 25 March
          1918) was a French composer. He is sometimes seen as the first
          Impressionist composer, although he vigorously rejected the term. He
          was among the most influential composers of the late 19th and early
          20th centuries. Debussy's orchestral works include Prélude à
          l'après-midi d'un faune (1894), Nocturnes (1897–1899) and Images
          (1905–1912). His music was to a considerable extent a reaction against
          Wagner and the German musical tradition. He regarded the classical
          symphony as obsolete and sought an alternative in his "symphonic
          sketches", La mer (1903–1905). His piano works include two books of
          Préludes and two of Études.
        </p>

        <p className="bio nat-font">
          Throughout his career he wrote mélodies based on a wide variety of
          poetry, including his own. He was greatly influenced by the Symbolist
          poetic movement of the later 19th century. A small number of works,
          including the early La Damoiselle élue and the late Le Martyre de
          saint Sébastien have important parts for chorus. In his final years,
          he focused on chamber music, completing three of six planned sonatas
          for different combinations of instruments. With early influences
          including Russian and far-eastern music, Debussy developed his own
          style of harmony and orchestral colouring, derided – and
          unsuccessfully resisted – by much of the musical establishment of the
          day. His works have strongly influenced a wide range of composers
          including Béla Bartók, Olivier Messiaen, George Benjamin, and the jazz
          pianist and composer Bill Evans. Debussy died from cancer at his home
          in Paris at the age of 55 after a composing career of a little more
          than 30 years.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HtP137xWIoI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <footer>
          <a href="https://open.spotify.com/artist/1Uff91EOsvd99rtAupatMP">
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

export default Claude
