import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HomePage extends Component {
  render() {
    return (
      <>
        <img
          className="home"
          src="https://wikiclipart.com/wp-content/uploads/2017/06/Music-black-and-white-music-clip-art-black-and-white-free-clipart-images.jpg"
        />
        <p className="enter">
          <Link to="/music"> Nadia's Favorite Musical Artists </Link>
        </p>
      </>
    )
  }
}

export default HomePage
