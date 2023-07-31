import React from 'react'
import { useState } from 'react';
import LoginScreen from './LoginScreen';
import { supabase } from './Client';
import SignupScreen from './SignupScreen';
import './WelcomeScreen.css';
import { Router, Route, Routes } from 'react-router-dom';

function WelcomeScreen(props) {
  const [signIn, setSignIn] = useState(false)
  return (
    <div className='WelcomeScreen'>
        <div className='WelcomeScreen_background'>
          <img className='WelcomeScreen_logo'
          src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/27/2769e90ac345e6e281dc9aa597726dba82a9df95_full.jpg' alt='logo' />'
          <button onClick={() => setSignIn(true)}
          className='WelcomeScreen_signIn'>Sign In</button>
          <div className='WelcomeScreen_gradient'/> 
        </div>
        
        <div className='WelcomeScreen_body'>
          
          {signIn? (
              <LoginScreen setUser={props.setUser}/>
            ) :(
            <>
            <h1>Full content library in HD quality, with multiple subtitles.</h1>
            <h2>Free entertainment is the best type of entertainment where no money is needed</h2>
            <div className="WelcomeScreen_input">
              <form>
                <input type='email' placeholder='Enter keywords' />
                <button className='WelcomeScreen_search'>Search</button>
              </form>
              
            </div>
            </>)}
          
            
        </div>
    </div>
  )
}

export default WelcomeScreen