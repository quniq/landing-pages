import React, { useState } from 'react'
import './LPsecStyles.scss'
import peeps from './../../../assets/peeps.svg'

const LSSseven = () => {
  const [isOpen, setIsOpen] = useState(false)
  const reqAccOC = (e) => {
    e.preventDefault()
    // alert('Requested Account Open')
    setIsOpen(true)
    // window.location.href = '/login';
  }
  return (
    <div className="LSSsevenMain">
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
      <div className="LSSsevenMain-Left">
        <div className="LSSsevenMain-Left-tc">
          We deeply understand the importance of your financial future. Our
          approach is straightforward and our advice is thoughtful, encouraging
          you to make smart decisions for your long-term success.
        </div>
        <div onClick={reqAccOC} className="reqAbtn">Request Access</div>
      </div>
      <div className="LSSsevenMain-Right">
        <img src={peeps} alt="" />
      </div>
    </div>
  )
}

export default LSSseven
