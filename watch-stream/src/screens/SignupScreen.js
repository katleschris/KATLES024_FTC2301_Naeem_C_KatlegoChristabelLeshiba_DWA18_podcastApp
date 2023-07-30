import React, { useState } from 'react'
import { supabase } from './Client'
import { Route, Routes, Link } from 'react-router-dom'

function SignupScreen() {

    const [FormData, setFormData] = useState({
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
            const { data, error } = await supabase.auth.signUp(
                {
                  email: FormData.email,
                  password: FormData.password,
                  options: {
                    data: {
                      full_name: FormData.fullname,
                    }
                  }
                }
              )
              alert('Check your email for verification link')
        } catch (error) {
            alert(error)
        }
    }


  return (
    <div className='SignupScreen'>
        <form onClick={handleSubmit}>
            <input placeholder='fullname'
            name='fullname' type='text'
            onChange={handleChange} />

            <input placeholder='email'
            name='email' type='email'
            onChange={handleChange} />

            <input placeholder='password'
            name='password' type='password'
            onChange={handleChange} /> 

            <button type='submit'>Register</button>    
        </form>
        Already have an accout? <Link to = '/'>Login</Link>
    </div>
  )
}

export default SignupScreen