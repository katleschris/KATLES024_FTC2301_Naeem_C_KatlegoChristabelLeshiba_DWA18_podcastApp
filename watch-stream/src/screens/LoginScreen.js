import React from 'react'
import {Button, Divider, Form, Input, Typography} from 'antd'
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import './LoginScreen.css'

function LoginScreen() {
  return (
    <div className='welcome'>
        <Form className='login'>
            <Typography.Title>Welcome</Typography.Title>
            <Form.Item label = 'Email' name = {'myEmail'}>
                <Input placeholder = 'Enter your email'/>
            </Form.Item>
            <Form.Item label = 'Password' name = {'myPassword'}>
                <Input placeholder = 'Enter your password'/>
            </Form.Item>
            <Button type='primary' htmlType='submit' block>Login</Button>
            <Divider style={{borderColor: 'black'}}>or Login with</Divider>
            <div>
              <FaGoogle />
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              </div>
        </Form>
    </div>
  )
}

export default LoginScreen

