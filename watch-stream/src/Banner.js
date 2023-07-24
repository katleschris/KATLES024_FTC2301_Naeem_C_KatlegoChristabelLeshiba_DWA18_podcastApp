import React from 'react'
import './Banner.css'
import background5 from './background5.jpg'

function Banner() {
    function truncate(string, n){
        return string?.length > n? string.substr(0, n-1) + '...' : string
    }


  return (
    <header className='banner' 
    style={{
        backgroundSize: 'cover', 
        backgroundImage: `url(${background5})`,
        backgroundPosition: 'center center',
    }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>Favorite</button>
            </div>
            <h1 className='banner_description'>{truncate(`This is a test description`, 200)}</h1>
        </div>
        <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner