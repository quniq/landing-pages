import React from 'react'
import './Header.scss'
import Logo from './../assets/Logo.png';

const Header = () => {
  return (
    <div className="headerMain">
      <div className="headerMain-Con">
        <div className="headerMain-Con-left"><img src={Logo} alt="" /></div>
        <div className="headerMain-Con-mid">
          <ul>
            <li>
              <a href="#">Investing</a>
            </li>
            <li>
              <a href="#">How it woriks?</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="headerMain-Con-right">
          <div className="headerMain-Con-right-BTNCON">
            <button>Request Access</button>
            {/* <button>Login</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
