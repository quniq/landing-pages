import React, { useState } from 'react'
import './Header.scss'
import Logo from './../assets/Logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const reqAccOC = (e) => {
    e.preventDefault()
    // alert('Requested Account Open')
    setIsOpen(true)
    // window.location.href = '/login';
  }
  return (
    <div className="headerMain">
      <div
        onClick={() => setIsOpen(false)}
        className={'h-popup ' + (isOpen && ' active')}
      >
        <div className="h-popup-c">
          <div onClick={() => setIsOpen(false)} className="crossBtn">
            <div className="crossBtn-int">
              <div className="cbl1"></div>
              <div className="cbl2"></div>
            </div>
          </div>
          <iframe
            style={{ height: '500px', width: '700px' }}
            src="https://forms.zohopublic.in/quniqtechnologiesprivatelimite/form/RequestAccessBerrywise/formperma/FfbwAtzh6qmYlL1VsE6FbF5xmIh0ZbFe2kwxB2fwgsk"
          ></iframe>
        </div>
      </div>
      <div className="headerMain-Con">
        <div className="headerMain-Con-left">
          <img src={Logo} alt="" />
        </div>
        <div className="headerMain-Con-mid">
          <ul>
            <li>
              <a href="#">Investing</a>
            </li>
            <li>
              <a href="#">How it works?</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="headerMain-Con-right">
          <div className="headerMain-Con-right-BTNCON">
            <button onClick={reqAccOC}><p>Request Access</p></button>
            {/* <button>Login</button> */}
          </div>
        </div>
        <div className="headerMain-Con-right-mob">
          <div className="hammenu">
            <div className="hamline"></div>
            <div className="hamline"></div>
            <div className="hamline"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
