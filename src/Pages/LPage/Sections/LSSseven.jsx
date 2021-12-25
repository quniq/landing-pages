import React from 'react'
import './LPsecStyles.scss'
import peeps from './../../../assets/peeps.svg'

const LSSseven = () => {
  return (
    <div className="LSSsevenMain">
      <div className="LSSsevenMain-Left">
        <div className="LSSsevenMain-Left-tc">
          We deeply understand the importance of your financial future. Our
          approach is straightforward and our advice is thoughtful, encouraging
          you to make smart decisions for your long-term success.
        </div>
        <div className="reqAbtn">Request Access</div>
      </div>
      <div className="LSSsevenMain-Right">
        <img src={peeps} alt="" />
      </div>
    </div>
  )
}

export default LSSseven
