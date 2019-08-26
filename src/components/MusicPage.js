import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MusicPage extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <ul>
          <li>
            <Link to="/music/epikhigh">
              <img src="https://www.star2.com/wp-content/uploads/2017/11/2017102413128072764_1-e1510310862488-770x470.jpg" />
            </Link>
          </li>
          <li>
            <Link to="/music/natkingcole">
              {' '}
              <img src="https://ichef.bbci.co.uk/images/ic/960x540/p01bqm2q.jpg" />
            </Link>
          </li>
          <li>
            {' '}
            <Link to="/music/claudedebussy">
              {' '}
              <img src="https://cdn.nybooks.com/wp-content/uploads/2018/11/debussy-detail.jpg" />
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default MusicPage
