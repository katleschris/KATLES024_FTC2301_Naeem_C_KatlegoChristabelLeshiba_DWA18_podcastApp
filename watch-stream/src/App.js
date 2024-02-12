import React, { useState, useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import ShowContent from './components/showContent';

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
          <WelcomeScreen setUser={setUser} shows = {shows}/>
         ) : ( 
             <Routes>
                <Route path="/" element={<HomeScreen shows = {shows}/>} />
                <Route path="/id/:id" element={<ShowContent user={user} onClose={()=> alert('Audio is playing... are you sure you want to close the page?')}/>} />
            </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
