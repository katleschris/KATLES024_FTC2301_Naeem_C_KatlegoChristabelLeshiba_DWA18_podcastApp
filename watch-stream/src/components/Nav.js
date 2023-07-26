import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {

    const [show, setShow] = useState(false);
    const transitionNav = () => {
        if (window.scrollY > 100){
            setShow(false)
        }else {
            setShow(true)
        }
    }
    
    useEffect( () => {
        window.addEventListener('scroll', transitionNav);
        return () => window.removeEventListener('scroll', transitionNav)
    }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_contents'>
          <img className='nav_logo' src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/27/2769e90ac345e6e281dc9aa597726dba82a9df95_full.jpg' alt='logo'/>
          <img className= 'nav_avatar' src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/cc/cc8ba2f7ceb6ab4571c4185279a0e502216c9c06_full.jpg' alt='avatar' />
        </div>
    </div>
  )
}

export default Nav