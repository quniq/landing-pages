import React from 'react'
import Header from '../../components/Header'
import Footer from './../../components/Footer'
import './LandingP.scss'
import LPSfive from './Sections/LPSfive'
import LSSseven from './Sections/LSSseven'
import LPSthree from './Sections/LPSthree'
import LPSfour from './Sections/LPSfour'
import LPSone from './Sections/LPSone'
import LPSsix from './Sections/LPSsix';
import LPStwo from './Sections/LPStwo';
const LandingP = () => {
  return (
    <div className="LandingPMain">
      <Header />
      <LPSone />
      <LPStwo/>
      <LPSthree />
      <LPSfour />
      <LPSfive />
      <LPSsix/>
      <LSSseven />
      {/* <Footer /> */}
    </div>
  )
}

export default LandingP
