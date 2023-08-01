import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowContent.css';

function ShowContent() {
  const { id } = useParams(); // Access the show's ID from the URL parameter
    const baseUrl = "https://podcast-api.netlify.app/id/";
    const [showData, setshowData] = useState({})
    const [selectedSeason, setSelectedSeason] = useState({});

  useEffect(() => {
      fetchShow()
  },[])

  async function fetchShow(){
    const response = await fetch(baseUrl + id)
    const tempShowData = await response.json()
    setshowData(tempShowData)
    setSelectedSeason(tempShowData.seasons[0])
    
  }

  console.log('showData,selectedSeasons',showData, selectedSeason)

  return (
    <div className='showContent'>
      {/* Display the content for the specific show with the given 'id' */}
      <h1>{showData?.title}</h1>
      <div className='video' style={{backgroundImage: `url('${showData.image}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>

      {/* Toggle between seasons using a drop-down menu */}
      <div className='seasons'>
        <select
          value={selectedSeason}
          onChange={(e) => {
            e.preventDefault()
            setSelectedSeason(e.target.value)
            console.log(e.target.value)
          }}
        >
          { showData !== {}
            ? (showData?.seasons?.map((season) => (
                <option key={season.season} value={season.title}>
                Season {season.season}
                </option>
                )))
            : null}
        </select>
      </div>

      {/* List of episodes for the selected season */}
      {/* <div className='episodes'>
        <h2>Season {selectedSeason.number} Episodes:</h2>
        <ul>
          {selectedSeason.episodes.map((episode) => (
            <li key={episode.id}>{episode.title}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default ShowContent;

