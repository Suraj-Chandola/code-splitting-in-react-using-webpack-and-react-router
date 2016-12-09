import React from 'react'
import { Link }  from 'react-router'

const Header = () =>
  <div>
    <Link to="/">Home</Link>
    <Link to="/settings">Setting</Link>
    <Link to="/about">About</Link>
  </div>

export default Header
