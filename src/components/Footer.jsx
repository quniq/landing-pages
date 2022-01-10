import React from 'react'
import './Footer.scss'
import Logo from './../assets/LogoW.svg'

const Footer = () => {
  return (
    <div className="FooterMain">
      <div className="FooterMain-Con WEBV">
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
          <div className="FooterMain-BOTM-CON">
            <div className="FooterMain-BOTM-CON-top">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Regulatory Disclosure</a>
              <a href="#">Site Map</a>
            </div>
          <div className="FooterMain-BOTM-LINE"></div>
            <div className="FooterMain-BOTM-CON-BOTM">
              <p>
                The material presented in this website is for informational
                purposes only and should not be construed as investment advice.
                It is not a recommendation of, or an offer to sell or
                solicitation of an offer to buy, any particular security,
                strategy or investment product. Investing in securities involves
                risks, including the potential loss of money, and past
                performance does not guarantee future results. Historical
                returns, expected returns, and probability projections are
                provided for informational and illustrative purposes, and may
                not reflect actual future performance.{' '}
              </p>
              <p>
                Past Performance Is No Guarantee Of Future Results, And Any
                Expected Returns Or Hypothetical Projections May Not Reflect
                Actual Future Performance. Furthermore, Past Returns May Reflect
                The Performance Of Assets For A Finite Time, Or During A Period
                Of Extreme Market Activity. All Investments Involve Risk And May
                Lose Money. There can be no assurance that an investment mix or
                any projected or actual performance shown will lead to the
                expected results shown or perform in any predictable manner. It
                should not be assumed that investors will experience returns in
                the future, if any, comparable to those shown or that any or all
                Clients actually experienced such returns.
              </p>
              <p>
                Any comparison to traditional financial advisors or mutual funds
                is based on an evaluation of average fees and returns. Actual
                results may be different for each investor.{' '}
              </p>
              <p>
                Projected and/or hypothetical performance is intended to show
                only an expected range of possible investment outcomes based on
                historical average returns and standard deviation of each
                investment type contained in the investment mix recommended by
                Berrywise.ai, but does not take into consideration the effect of
                taxes, changing risk profiles, or future investment decisions.
                Projected and/or hypothetical performance does not represent
                actual Client accounts or actual trades and may not reflect the
                effect of material economic and market factors. The actual
                transaction costs in Client accounts may be different.
              </p>
              <p>
                Berrywise, Berrywise.ai is a registered trademark of Quniq
                Technologies Private Limited
              </p>
              <h1>
                © 2022 Quniq Technologies Private Limited. All Rights Reserved.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="FooterMain-ConMOB">
        <div className="FooterMain-ConMOB-top">
          <img className="FLogo" src={Logo} alt="" />
        </div>
        <div className="FooterMain-ConMOB-mid">
          <div className="fcm">
            <div className="fheads">Investing</div>
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
              </li>
            </ul>
          </div>
          <div className="fcm">
            <div className="fheads">Resources</div>
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
              </li>
            </ul>
          </div>
          <div className="fcm">
            <div className="fheads">Company</div>
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
          <div className="fcm">
            <div className="fheads"></div>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Regulatory Disclosure</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="FooterMain-ConMOB-bottom">
          <div className="tl"></div>
          <p>
            The material presented in this website is for informational purposes
            only and should not be construed as investment advice. It is not a
            recommendation of, or an offer to sell or solicitation of an offer
            to buy, any particular security, strategy or investment product.
            Investing in securities involves risks, including the potential loss
            of money, and past performance does not guarantee future results.
            Historical returns, expected returns, and probability projections
            are provided for informational and illustrative purposes, and may
            not reflect actual future performance.{' '}
          </p>
          <p>
            Past Performance Is No Guarantee Of Future Results, And Any Expected
            Returns Or Hypothetical Projections May Not Reflect Actual Future
            Performance. Furthermore, Past Returns May Reflect The Performance
            Of Assets For A Finite Time, Or During A Period Of Extreme Market
            Activity. All Investments Involve Risk And May Lose Money. There can
            be no assurance that an investment mix or any projected or actual
            performance shown will lead to the expected results shown or perform
            in any predictable manner. It should not be assumed that investors
            will experience returns in the future, if any, comparable to those
            shown or that any or all Clients actually experienced such returns.
          </p>
          <p>
            Any comparison to traditional financial advisors or mutual funds is
            based on an evaluation of average fees and returns. Actual results
            may be different for each investor.{' '}
          </p>
          <p>
            Projected and/or hypothetical performance is intended to show only
            an expected range of possible investment outcomes based on
            historical average returns and standard deviation of each investment
            type contained in the investment mix recommended by Berrywise.ai,
            but does not take into consideration the effect of taxes, changing
            risk profiles, or future investment decisions. Projected and/or
            hypothetical performance does not represent actual Client accounts
            or actual trades and may not reflect the effect of material economic
            and market factors. The actual transaction costs in Client accounts
            may be different.
          </p>
          <p>
            Berrywise, Berrywise.ai is a registered trademark of Quniq
            Technologies Private Limited
          </p>
          <h1>
            © 2022 Quniq Technologies Private Limited. All Rights Reserved.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
