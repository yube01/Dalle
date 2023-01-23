import React from 'react'
import "./Header.css"
import Logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>

        <Link to="/" >
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        </Link>
       <Link to="/post" >
       <div className="button">
            <button>
                Create
            </button>
        </div>
       </Link>
        
      
    </div>
  )
}

export default Header
