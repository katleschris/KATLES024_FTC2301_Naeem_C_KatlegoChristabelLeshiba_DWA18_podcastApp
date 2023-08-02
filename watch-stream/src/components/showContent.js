import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowContent.css';

function ShowContent() {
  const { id } = useParams(); // Access the show's ID from the URL parameter
    const baseUrl = "https://podcast-api.netlify.app/id/";
    const [showData, setshowData] = useState({})
    const [selectedSeason, setSelectedSeason] = useState({});
    const [currentEpisodeURL, setCurrentEpisodeURL] = useState('');

  useEffect(() => {
      fetchShow()
  },[])

  async function fetchShow(){
    const response = await fetch(baseUrl + id)
    const tempShowData = await response.json()
    setshowData(tempShowData)
    setSelectedSeason(tempShowData.seasons[0])
    
  }
  function truncate(string, n){
    return string?.length > n? string.substr(0, n-1) + '...' : string
  }
  const seasonImageURL = selectedSeason?.image ?? showData?.image

  async function playEpisode(episodeURL){

    try {
        const response = await fetch(episodeURL);
        const blob = await response.blob();
        const audioBlobUrl = URL.createObjectURL(blob);
        setCurrentEpisodeURL(audioBlobUrl)
        } catch (error) {
            console.error('Error fetching MP3:', error);
        }

    
  }

  return (
    <div className='showContent'>

      <div className='video' 
        style={{backgroundImage: `url('${seasonImageURL}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
          { currentEpisodeURL
            ?
            <audio controls>
                <source src={currentEpisodeURL} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            :
            null
        }
      </div>

      <div className='show_description' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={showData.image} style={{ width: '150px', height: '150px' }} />
        <div style={{ marginLeft: '20px' }}>
          <p style={{width: '80%'}}>{truncate(showData?.description, 300)}</p>
          <p>Last Updated: {new Date(showData?.updated).toLocaleDateString('en-us')}</p> 
          <p>Genres: {showData?.genres + ' '}</p>
        </div>
      </div>

      {/* Toggle between seasons using a drop-down menu */}
      <div className='seasons'>
        <select
          value={selectedSeason?.title}
          onChange={(e) => {
            e.preventDefault()
            const seasonNumber = parseInt(e.target.value.split(' ')[1]) - 1
            setSelectedSeason(showData.seasons[seasonNumber])
            // setSelectedSeason(e.target.value)

          }}
        >
          { showData !== {}
            ? (showData?.seasons?.map((season) => (
                <option key={season.season} value={season.title}>
               Season {season.season}{}
                </option>
                )))
            : null}
        </select>
      </div>

      {/* List of episodes for the selected season */}
      <div className='episodes'>
        {selectedSeason ? (
          <>
            <h2> {selectedSeason.title} Episodes:</h2>
            <ul>
              {selectedSeason?.episodes?.map((episode) => (
                <button key={episode.id} onClick={() => playEpisode(episode.file)}>{episode.title} </button>
              ))}
            </ul>
          </>
        ) : (
          <p>No episodes available for the selected season</p>
        )}
      </div>

    </div>
  );
}

export default ShowContent;

