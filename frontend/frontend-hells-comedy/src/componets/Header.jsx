import React from 'react'
//import { Head } from '../styles/Header.style'
import '../styles/Header.css'
import banner from '../asserts/banner.png'
import CallIcon from '@mui/icons-material/Call';
import reservation from '../asserts/reservation.jpeg'
function Header() {
  return (
    <header>
        <div className='headerH1'>
            <a href="">
                <h1>COMEDY CELLAR</h1>
            </a>
        </div>
        <div className='banner'>
            <a href="">
                <img src={banner} alt="" />
            </a>
        </div>
        <a href="">
        </a>
        <div className='phoneContainer'>
            <span>Give us a ring</span>
            <br />
            <CallIcon/>
                +233 556 823 335
        </div>
        <div className='reservation'>

        <a href="">
            <img src={reservation} alt="" />
        </a>
        </div>

    </header>
    
  )
}

export default Header
