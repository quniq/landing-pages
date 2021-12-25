import React from 'react'
import './Footer.scss'
import Logo from './../assets/LogoW.svg'

const Footer = () => {
  return (
    <div className="FooterMain">
      <div className="FooterMain-Con">
        <div className="FooterMain-Top">
          <div className="FooterMain-Top-VL">
            <img className="FLogo" src={Logo} alt="" />
          </div>
          <div className="FooterMain-Top-VL exST">
            <div className="Flinks">
              <div className="Flinks-HEAD">Investing</div>
              <ul>
                <li>
                  <a href="#">Personal</a>
                </li>
                <li>
                  <a href="#">For Business</a>
                </li>
                <li>
                  <a href="#">Request Access</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>{' '}
              </ul>
            </div>
          </div>{' '}
          <div className="FooterMain-Top-VL exST">
            <div className="Flinks">
              <div className="Flinks-HEAD">Resources</div>
              <ul>
                <li>
                  <a href="#">How it works?</a>
                </li>
                <li>
                  <a href="#">Risk disclosure</a>
                </li>
                <li>
                  <a href="#">Disclaimer</a>
                </li>
                <li>
                  <a href="#">Expert guidance</a>
                </li>{' '}
              </ul>
            </div>
          </div>
          <div className="FooterMain-Top-VL exST">
            <div className="Flinks">
              <div className="Flinks-HEAD">Company</div>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="FooterMain-BOTM">
          <div className="FooterMain-BOTM-LINE"></div>
          <div className="FooterMain-BOTM-CON">
            <div className="FooterMain-BOTM-CON-top">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Regulatory Disclosure</a>
              <a href="#">Site Map</a>
            </div>
            <div className="FooterMain-BOTM-CON-BOTM">
              © 2021 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
