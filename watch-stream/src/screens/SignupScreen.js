import React, { useState } from 'react';
import { supabase } from './Client';
import { Route, Routes, Link } from 'react-router-dom';
import LoginScreen from './LoginScreen';

function SignupScreen() {
  const [showLoginScreen, setShowLoginScreen] = useState(false); // State to control component rendering

    const [formData, setFormData] = useState({
        fullname:'',
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
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        full_name: formData.fullname,
                    }
                }
            });

            if (error) throw error;
            alert('Check your email for verification link');
            setShowLoginScreen(true); // Show the LoginScreen component after successful signup
            
                
        } catch (error) {
            alert(error.message);
        }
    }
    if (showLoginScreen) {
      return <LoginScreen />;
    }

    return (
        <div className='SignupScreen'>
            <form onSubmit={handleSubmit}>
                <label for='fullname'>fullname</label>
                <input
                    style={{ color: 'white' }}
                    placeholder='Fullname'
                    name='fullname'
                    type='text'
                    onChange={handleChange}
                />
                <label for='email'>Email</label>
                <input
                    style={{ color: 'white' }}
                    placeholder='email'
                    name='email'
                    type='email'
                    onChange={handleChange}
                />
                <label for='password'>Password</label>
                <input
                    style={{ color: 'white' }}
                    placeholder='password'
                    name='password'
                    type='password'
                    onChange={handleChange}
                />

                <button className='register' type='submit'>Register</button>    
            </form>
            Already have an account? <Link to='#' onClick={() => setShowLoginScreen(true)}style={{color:'#BF40BF'}}>Login</Link>
        </div>
    );
}

export default SignupScreen;
