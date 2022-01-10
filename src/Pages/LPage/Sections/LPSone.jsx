import React, { useEffect, useState } from 'react'
import peepStanding from './../../../assets/peepStanding.png'
import peepTWO from './../../../assets/peepTWO.png'
import peepThree from './../../../assets/peepThree.png'
import peepFour from './../../../assets/peepFour.png'
import Slider from 'react-slick'
const LPSone = () => {
  // const [sliderPosi, setSliderPosi] = useState(1)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSliderPosi(sliderPosi == 3 ? 1 : sliderPosi + 1)
  //   }, 6000)
  //   return () => clearInterval(interval)
  // }, [sliderPosi])

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  }
  return (
    <div className="LPSoneMAIN">
      <div className="LPSone-Left">
        <div className="LPSone-Left-Con">
          <h1>Personalized Investing Simplified</h1>
          <h2>
            Berrywise is the only investment manager you will ever need. We
            combine A.I. algorithms with sophisticated risk modelling to build
            tailored investment portfolios.
          </h2>
          <div className="gsBTN">Get Started</div>
        </div>
      </div>
      <div className="LPSone-Right">
        <div className="SliderMCON">
          <Slider {...settings}>
            <div>
              <div className="SliderObjCon">
                <div className="LPSone-Right-R">
                  <img src={peepStanding} alt="" />
                </div>
                <div className="LPSone-Right-L">
                  <h1>Vidya Kumar</h1>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Risk Profile</h2>
                    <h3>Medium</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Investment Amount</h2>
                    <h3>2,50,000</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Investment Duration</h2>
                    <h3>6 years</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Holdings</h2>
                    <h3>22</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Rebalance Period</h2>
                    <h3>Annually</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="SliderObjCon">
                <div className="LPSone-Right-R">
                  <img src={peepTWO} alt="" />
                </div>
                <div className="LPSone-Right-L">
                  <h1>Barry Allen</h1>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Risk Profile</h2>
                    <h3>Balanced</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Investment Amount</h2>
                    <h3>5,00,000</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Investment Duration</h2>
                    <h3>8 years</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Holdings</h2>
                    <h3>27</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Rebalance Period</h2>
                    <h3>Monthly</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="SliderObjCon">
                <div className="LPSone-Right-R">
                  <img src={peepThree} alt="" />
                </div>
                <div className="LPSone-Right-L">
                  <h1>Jenny Shah</h1>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Risk Profile</h2>
                    <h3>Moderate</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Investment Amount</h2>
                    <h3>8,00,000</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Investment Duration</h2>
                    <h3>4 years</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Holdings</h2>
                    <h3>26</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Rebalance Period</h2>
                    <h3>Quarterly</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="SliderObjCon">
                <div className="LPSone-Right-R">
                  <img src={peepFour} alt="" />
                </div>
                <div className="LPSone-Right-L">
                  <h1>Ajay Singh</h1>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Risk Profile</h2>
                    <h3>Assertive</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Investment Amount</h2>
                    <h3>14,00,000</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Investment Duration</h2>
                    <h3>7 years</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Holdings</h2>
                    <h3>31</h3>
                  </div>
                  <div className="LPSone-Right-L-Tcon">
                    <h2>Rebalance Period</h2>
                    <h3>Annually</h3>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/* <div className="SliderMAINCON">
          CARD START
          <div className="SliderObjCon S1">
            <div className="LPSone-Right-R">
              <img src={peepStanding} alt="" />
            </div>
            <div className="LPSone-Right-L">
              <h1>Vidya Kumar</h1>
              <div className="LPSone-Right-L-Tcon">
                <h2>Risk Profile</h2>
                <h3>Medium</h3>
              </div>
              <div className="LPSone-Right-L-Tcon">
                <h2>Investment Amount</h2>
                <h3>2,50,000</h3>
              </div>
              <div className="LPSone-Right-L-Tcon">
                <h2>Investment Duration</h2>
                <h3>6 years</h3>
              </div>
              <div className="LPSone-Right-L-Tcon">
                <h2>Holdings</h2>
                <h3>22</h3>
              </div>
              <div className="LPSone-Right-L-Tcon">
                <h2>Rebalance Period</h2>
                <h3>Annually</h3>
              </div>
            </div>
          </div>
          CARD END

          CARD START
          <div className="SliderObjCon">
            <div className="LPSone-Right-R">
              <img src={peepStanding} alt="" />
            </div>
            <div className="LPSone-Right-L">
              <h1>Vidya Kumar</h1>
              <div className="LPSone-Right-L-Tcon">
                <h2>Risk Profile</h2>
                <h3>Medium</h3>
              </div>
              <div className="LPSone-Right-L-Tcon">
                <h2>Investment Amount</h2>
                <h3>2,50,000</h3>
              </div>
              <div className="LPSone-Right-L-Tcon">
                <h2>Investment Duration</h2>
                <h3>6 years</h3>
              </div>
              <div className="LPSone-Right-L-Tcon">
                <h2>Holdings</h2>
                <h3>22</h3>
              </div>
              <div className="LPSone-Right-L-Tcon">
                <h2>Rebalance Period</h2>
                <h3>Annually</h3>
              </div>
            </div>
          </div>
          CARD END
        </div> */}
      </div>
    </div>
  )
}

export default LPSone
