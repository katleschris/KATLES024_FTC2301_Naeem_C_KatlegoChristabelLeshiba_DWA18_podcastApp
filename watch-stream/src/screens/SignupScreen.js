import React, { useState } from 'react';
import { supabase } from './Client';
import { Route, Routes, Link } from 'react-router-dom';

function SignupScreen() {

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
            history.push('./LoginScreen')
                
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className='SignupScreen'>
            <form onSubmit={handleSubmit}>
                <input
                    style={{ color: 'white' }}
                    placeholder='fullname'
                    name='fullname'
                    type='text'
                    onChange={handleChange}
                />

                <input
                    style={{ color: 'white' }}
                    placeholder='email'
                    name='email'
                    type='email'
                    onChange={handleChange}
                />

                <input
                    style={{ color: 'white' }}
                    placeholder='password'
                    name='password'
                    type='password'
                    onChange={handleChange}
                />

                <button className='register' type='submit'>Register</button>    
            </form>
            Already have an account? <Link to='./LoginScreen'>Login</Link>
        </div>
    );
}

export default SignupScreen;
