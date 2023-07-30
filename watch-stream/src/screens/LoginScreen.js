import React, { useState } from 'react'
import { supabase } from './Client'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

function SignupScreen() {

    const [FormData, setFormData] = useState({
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
            email: FormData.email,
            password: FormData.password,
          })
              // alert('Incorrect email or password')
        } catch (error) {
            alert(error)
        }
    }


  return (
    <div className='SignupScreen'>
        <form onClick={handleSubmit}>
          <input placeholder='email'
            name='email' type='email'
            onChange={handleChange} />

          <input placeholder='password'
            name='password' type='password'
            onChange={handleChange} /> 

          <button type='submit'>Sign in</button>    
        </form>
        Dont have an accout? <Link to = '/'>SignUp</Link>
    </div>
  )
}

export default SignupScreen