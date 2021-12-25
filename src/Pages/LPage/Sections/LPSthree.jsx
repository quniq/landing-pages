import React from 'react'
import graphD from './../../../assets/graphD.png'

const LPSthree = () => {
  return (
    <div className="LPSthreeMAIN">
      <div className="LPSthree-Top">
        <h1>Smart Investing, Starts here!</h1>
        <h3>
          Find out why personalizing your investment is better than ‘Made for
          everyone’ Mutual Funds and ETFs.
        </h3>
      </div>
      <div className="LPSthree-BOTM">
        <img src={graphD} alt="" />
        <h1>
          Above chart is a hypothetical comparison. Investing involves risk of
          loss and past performance does not guarantee future returns. See{' '}
          <a href="#">disclaimer</a>{' '}
        </h1>
      </div>
    </div>
  )
}

export default LPSthree
