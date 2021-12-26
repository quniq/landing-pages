import React, { useState, useEffect } from 'react'
import graphD from './../../../assets/graphD.png'
import DoubleBarChart from './../../../assets/RchartsF/DoubleBarChart'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import minus from './../../../assets/minus.png'
import plus from './../../../assets/plus.png'

const compound = require('compound-interest-calc')
const LPSthree = () => {
  const [invCount, setInvCount] = useState(4500)
  const [compoundOutput, setCompoundOutput] = useState('')
  const [compoundOut, setCompoundOut] = useState(12321)
  const [mfD, setMfD] = useState({
    year1: 10,
    year2: 20,
    year3: 30,
    year4: 40,
    year5: 50,
  })
  const [bwD, setBwD] = useState({
    year1: 30,
    year2: 40,
    year3: 50,
    year4: 60,
    year5: 70,
  })

  const handleCalc = (e) => {
    e.preventDefault()
    // setMfD({ year1: 120 })
    // setCompoundOutput(compound(100000, 0, 5, 0.12, 1))
    // let out = compound(100000, 0, 6, 0.12, 1)
    // setCompoundOutput(1000+compoundOutput)
    // console.log('clicked' + out)
    // console.log(out)
    setCompoundOutput(compoundOutput + 100)
  }

  const handleChangeInvestment = (value) => {
    setInvCount(value)
  }

  //calculate Percentage on pageload
  useEffect(() => {
    // let out = compound(100000, 0, 6, 0.12, 1)
    // setCompoundOutput(out.total)
    // console.log('====================================');
    // console.log(compoundOutput);
    // console.log('====================================');
    asyncCalc()
  }, [invCount])

  const handleMinv = (e) => {
    e.preventDefault()
    if (invCount - 1000 <= 1) {
      setInvCount(1)
      return
    }
    setInvCount(invCount - 1000)
  }
  const handleAinv = (e) => {
    e.preventDefault()
    setInvCount(invCount + 1000)
  }

  //async function to calculate percentage
  const asyncCalc = () => {
    // e.preventDefault()
    const out = compound(invCount, 0, 10, 0.172, 1)
    const outBW = compound(invCount, 0, 10, 0.246, 1)
    // setCompoundOutput(out.total[0])
    setMfD({
      year1: out.total[0],
      year2: out.total[1],
      year3: out.total[2],
      year4: out.total[3],
      year5: out.total[4],
      year6: out.total[5],
      year7: out.total[6],
      year8: out.total[7],
      year9: out.total[8],
      year10: out.total[9],
      year11: out.total[10],
    })
    setBwD({
      year1: outBW.total[0],
      year2: outBW.total[1],
      year3: outBW.total[2],
      year4: outBW.total[3],
      year5: outBW.total[4],
      year6: outBW.total[5],
      year7: outBW.total[6],
      year8: outBW.total[7],
      year9: outBW.total[8],
      year10: outBW.total[9],
      year11: outBW.total[10],
    })

    // console.log('====================================')
    // console.log(out.total)
    // console.log('====================================')
  }

  //graph data
  const data = [
    {
      name: '2021',
      MutualFunds: mfD.year1,
      BerryWise: bwD.year1,
    },
    {
      name: '2022',
      MutualFunds: mfD.year2,
      BerryWise: bwD.year2,
    },
    {
      name: '2023',
      MutualFunds: mfD.year3,
      BerryWise: bwD.year3,
    },
    {
      name: '2024',
      MutualFunds: mfD.year4,
      BerryWise: bwD.year4,
    },
    {
      name: '2025',
      MutualFunds: mfD.year5,
      BerryWise: bwD.year5,
    },
    {
      name: '2026',
      MutualFunds: mfD.year6,
      BerryWise: bwD.year6,
    },
    {
      name: '2027',
      MutualFunds: mfD.year7,
      BerryWise: bwD.year7,
    },
    {
      name: '2028',
      MutualFunds: mfD.year8,
      BerryWise: bwD.year8,
    },
    {
      name: '2029',
      MutualFunds: mfD.year9,
      BerryWise: bwD.year9,
    },
    {
      name: '2030',
      MutualFunds: mfD.year10,
      BerryWise: bwD.year10,
    },
    {
      name: '2031',
      MutualFunds: mfD.year11,
      BerryWise: bwD.year11,
    },
  ]

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
        <div className="LPSthree-BOTM-topINV">
          <h1>Investment Amount</h1>
          <h2>${invCount}</h2>
        </div>
        <div className="LPSthree-BOTM-Slider">
          <img onClick={handleMinv} className="btnIMG" src={minus} alt="" />
          <div className="LPSthree-BOTM-Slider-Con">
            <Slider
              min={1}
              max={10000}
              onChange={handleChangeInvestment}
              // labels={{ 15: '15', 61: 'Above 60' }}
              value={invCount}
            />
          </div>
          <img onClick={handleAinv} className="btnIMG" src={plus} alt="" />
        </div>

        <div className="LPthreeChartSec">
          <div className="LPSthree-BOTM-Data">
            <div className="LPSthree-BOTM-Data-Con">
              <div className="LPSthree-BOTM-Data-Con-line">
                <div className="tmfCC"></div>
                <h1>Typical Mutual Fund</h1>
              </div>
              <h2>$ {mfD.year11}</h2>
            </div>
            <div className="LPSthree-BOTM-Data-Con">
              <div className="LPSthree-BOTM-Data-Con-line">
                <div className="bwCC"></div>
                <h1>Personalized portfolio by Berrywise</h1>
              </div>
              <h2>$ {bwD.year11}</h2>
            </div>
          </div>
          <DoubleBarChart pdata={data} />
        </div>
        {/*
        <div className="demoTST">
          <button onClick={handleCalc}>CALC</button>
          <h1>output : {mfD.year1} </h1>
        </div> */}
        {/* <img src={graphD} alt="" /> */}
        <h1 className="DisclaimerGraph">
          Above chart is a hypothetical comparison. Investing involves risk of
          loss and past performance does not guarantee future returns. See{' '}
          <a href="#">disclaimer</a>{' '}
        </h1>
      </div>
    </div>
  )
}

export default LPSthree
