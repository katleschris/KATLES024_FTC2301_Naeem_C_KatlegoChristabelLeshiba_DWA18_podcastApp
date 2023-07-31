import React, { useState, useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  const [user, setUser] = useState( null);

  // useEffect( async () => {
  //   const showsEndpoint = 'https://podcast-api.netlify.app/shows';

  //   const response = await fetch(showsEndpoint)
  //   console.log(response.json())
    
    
  // }, [user])

  // function updateUser(){
  //   setUser(null)
  // }

  return (
    <div className="app">
      {/* <HomeScreen/> */}
      <Router>
        {!user ? (
          <WelcomeScreen setUser={setUser} />
         ) : ( 
             <Routes>
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
