import React, { useState, useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import ShowContent from './components/ShowContent';

function App() {
  const [user, setUser] = useState( null);
  const [shows, setShows] = useState([])
  const [groupedShows, setGroupedShows] = useState({})

  useEffect(() => {
    fetchShows()
  }, [])


  async function fetchShows(){
    const showsEndpoint = 'https://podcast-api.netlify.app/shows';
  
    const response = await fetch(showsEndpoint)
    const tempShows = await response.json()
    setShows(tempShows)
  }
  return (
    <div className="app">
      {/* <HomeScreen/> */}
      <Router>
        {!user ?  (
          <WelcomeScreen setUser={setUser} />
         ) : ( 
             <Routes>
                <Route path="/" element={<HomeScreen shows = {shows}/>} />
                <Route path="/id/:id" element={<ShowContent />} />
            </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
