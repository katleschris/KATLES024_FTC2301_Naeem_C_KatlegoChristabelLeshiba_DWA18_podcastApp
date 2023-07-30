import React, { useState } from 'react';
import { supabase } from './Client';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import './LoginScreen.css';
import SignupScreen from './SignupScreen';

function LoginScreen({ setUser }) {
  let navigate = useNavigate();

  const [showSignup, setShowSignup] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signIn({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      setUser(user);
      // Step 3: Redirect the user to the HomeScreen
      navigate('./HomeScreen');

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='LoginScreen'>
      {showSignup ? (
        <SignupScreen />
      ) : (
        <div className='mainContainer'>
          <h2 className='welcometext'>welcome</h2>
          <form className='form' onSubmit={handleSubmit}>

            <div className='inputContainer'>
              <input placeholder='email' name='email' type='email' onChange={handleChange} />
              <br />
              <input placeholder='password' name='password' type='password' onChange={handleChange} />
            </div>
            <div className='buttonContainer'>
              <button type='submit' className='sign_in'>Sign in</button>
            </div>
            <h5 className='media'>or login with</h5>
            <HorizontalRule />
            <div className='Icons'>
              <div className='icon' id='google'><FaGoogle /></div>
              <div className='icon' id='facebook'><FaFacebookF /></div>
              <div className='icon' id='instagram'><FaInstagram /></div>
              <div className='icon' id='twitter'><FaTwitter /></div>
            </div>
          </form>
          Don't have an account? <Link to='./SignupScreen' onClick={() => setShowSignup(true)}>Sign Up</Link>
        </div>
      )}
    </div>
  );
}

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.15rem;
  border-radius: 0.4rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1rem 0 0.5rem 0;
  backdrop-filter: blur(25px);
`;

export default LoginScreen;

