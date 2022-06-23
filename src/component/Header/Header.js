import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import user from "../../images/user.jpg"
import "./Header.scss"
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <a onClick={() => navigate('/')}>
        <div className='logo'>Movie App</div>
      </a>
      <div className='navOptionsContain'>
        <div className='navOptions'>
          <NavLink to={`/`}>Movies</NavLink>
          <NavLink to={`/shows`}>Shows</NavLink>
        </div>
        <div className='user-image'>
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  )
}

export default Header