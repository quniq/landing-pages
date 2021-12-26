import React from 'react'
import peepSitting from './../../../assets/peepSitting.png'
import imgO from './../../../assets/LPSTWO/one.png'
import imgOO from './../../../assets/LPSTWO/two.png'
import imgOOO from './../../../assets/LPSTWO/three.png'

const LPStwo = () => {
  return (
    <div className="LPStwoMAIN">
      <div className="LPStwoMAIN-L">
        <h1>Invest like pros!</h1>
        <h2>
          The best returns come from investment strategies that are tailored and
          "wired" to our clients' nervous systems, not their pocketbooks.
          Combining proprietary investment strategies with artificial
          intelligence and unique human insight, Berrywise brings out the "wise
          investor" in everybody.
        </h2>
        <a href="#">Learn More</a>
      </div>
      <div className="LPStwoMAIN-R">
        {/* <img className='Peep-sitting' src={peepSitting} alt="sitting" /> */}

        {/* CARD START */}
        <div className="LPStwoMAIN-R-Card">
          <div className="LPStwoMAIN-R-Card-L">
            <img src={imgO} alt="" />
          </div>
          <div className="LPStwoMAIN-R-Card-R">
            <h1>Personalized</h1>
            <h2>
              Plan for the future with a strategy that adapts to your financial
              goals and circumstances.
            </h2>
            <a href="#">Learn More</a>
          </div>
        </div>
        {/* CARD END */}

        {/* CARD START */}
        <div className="LPStwoMAIN-R-Card">
          <div className="LPStwoMAIN-R-Card-L">
            <img src={imgOO} alt="" />
          </div>
          <div className="LPStwoMAIN-R-Card-R">
            <h1>A.I. driven</h1>
            <h2>
              algorithms learns the patterns that drive markets, understand
              inherent market risks and analyse historical behavior.
            </h2>
            <a href="#">Learn More</a>
          </div>
        </div>
        {/* CARD END */}

        {/* CARD START */}
        <div className="LPStwoMAIN-R-Card">
          <div className="LPStwoMAIN-R-Card-L">
            <img src={imgOOO} alt="" />
          </div>
          <div className="LPStwoMAIN-R-Card-R">
            <h1>Safe</h1>
            <h2>
              Your portfolio fully under your control, we have no access to your
              funds. And all of this in your own demat account with your
              favourite broker
            </h2>
            <a href="#">Learn More</a>
          </div>
        </div>
        {/* CARD END */}
      </div>
    </div>
  )
}

export default LPStwo
