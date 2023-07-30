import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const LogoImg = styled.img`
  position: fixed;
  left: 0;
  top: 10px;
  width: 100px;
  object-fit: contain;
  padding-left: 20px;
  cursor: pointer;
`;

const SignIn = styled.button`
  position: fixed;
  right: 30px;
  top: 20px;
  background: linear-gradient(to right, #14163c 0%, #03217b 60%);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  width: 7%;
  height: 2rem;
  border: none;
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
`;
 
  

function NavBar() {
  return (
    <div className='nav_contents'>
      <LogoImg src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/27/2769e90ac345e6e281dc9aa597726dba82a9df95_full.jpg' alt='logo' />
      <SignIn >Sign in</SignIn>    
    </div>
  );
}

export default NavBar;
