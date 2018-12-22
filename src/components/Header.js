import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
    </section>
  )
}

export default Header;