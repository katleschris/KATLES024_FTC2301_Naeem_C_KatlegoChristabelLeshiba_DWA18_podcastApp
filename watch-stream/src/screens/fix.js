import React from 'react'
// import {Button, Divider, Form, Input, Typography} from 'antd'
import {FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
// import Button from '../components/Login/Button';
import Input from '../components/Login/Input';
import Icon from '../components/Login/Icon';
// import NavBar from '../components/Login/NavBar';
import './LoginScreen.css'

export default function LoginScreen() {

  const [formData, setFormData] = useState({
    fullname:'',
    email: '',
    password: '',
  })
  function handleChange(event) {
    setFormData((prevFormData) => {
        return{
            ...prevFormData,
            [event.target.name]: event.target.value 
        }
    })
  }
  async function handleSubmit(e){
    e.preventDefault()
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: 'example@email.com',
          password: 'example-password',
        })
      
      } catch (error) {
          alert(error)
        }

  const GoogleBackground = "linear-gradient(to right, #FF0000 0%, #FF8000 20%, #FFFF00 40%, #00FF00 60%, #0000FF 80%, #800080 100%)";
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <div className='LoginScreen'>
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input type="email" placeholder="Email" />
        <br />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <br/>
      <ButtonContainer>
        <button className='sign_in' type='submit' onClick={signIn}>Sign in</button>
        <button className='register' type='submit' onClick={register}>Register</button>
      </ButtonContainer>
      <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalRule />
      <IconsContainer>
      <Icon color={GoogleBackground}>
          <FaGoogle />
        </Icon>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px); /* Adjust blur strength as needed */
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.8); /* Reduce text opacity for a glassy effect */
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: background-color 0.3s ease-in-out; /* Add a smooth transition on hover */
  cursor: pointer;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  text-decoration: none;
  transition: text-decoration 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;