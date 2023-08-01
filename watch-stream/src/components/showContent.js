import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowContent.css';

function ShowContent() {
  const { id } = useParams(); // Access the show's ID from the URL parameter

  useEffect(async () => {
    const baseUrl = "https://podcast-api.netlify.app/shows/9177";

      const response = await fetch(baseUrl)
      // const showData = await response.json()
      console.log('showData', response)
  },[])

  // Sample data for the show with ID 'id'
  const sampleData = {
    id: 'show123',
    title: 'Example Show',
    seasons: [
      {
        number: 1,
        episodes: [
          { id: 'ep101', title: 'Episode 1 of Season 1' },
          { id: 'ep102', title: 'Episode 2 of Season 1' },
          // Add more episodes for season 1 if needed
        ],
      },
      {
        number: 2,
        episodes: [
          { id: 'ep201', title: 'Episode 1 of Season 2' },
          { id: 'ep202', title: 'Episode 2 of Season 2' },
          // Add more episodes for season 2 if needed
        ],
      },
      // Add more seasons if needed
    ],
  };

  // State to keep track of the selected season
  const [selectedSeason, setSelectedSeason] = useState(sampleData.seasons[0]);

  useEffect(() => {
    // You can fetch the show's data from an API here using the 'id' parameter
    // For now, we'll use the sampleData to simulate the fetched data

    // Find the selected season based on the URL parameter 'seasonNumber'
    const seasonNumber = parseInt(window.location.search.replace('?season=', ''));
    const selectedSeasonData = sampleData.seasons.find(
      (season) => season.number === seasonNumber
    );

    // Set the selected season in the state
    if (selectedSeasonData) {
      setSelectedSeason(selectedSeasonData);
    }
  }, [id]);

  return (
    <div className='showContent'>
      {/* Display the content for the specific show with the given 'id' */}
      <h1>{sampleData.title}</h1>
      <div className='video'>Video</div>

      {/* Toggle between seasons using a drop-down menu */}
      <div className='seasons'>
        <select
          value={selectedSeason.number}
          onChange={(e) => {
            const selectedSeasonNumber = parseInt(e.target.value);
            const selectedSeasonData = sampleData.seasons.find(
              (season) => season.number === selectedSeasonNumber
            );
            setSelectedSeason(selectedSeasonData);
            // Update the URL parameter to reflect the selected season
            window.history.pushState({}, '', `?season=${selectedSeasonNumber}`);
          }}
        >
          {sampleData.seasons.map((season) => (
            <option key={season.number} value={season.number}>
              Season {season.number}
            </option>
          ))}
        </select>
      </div>

      {/* List of episodes for the selected season */}
      <div className='episodes'>
        <h2>Season {selectedSeason.number} Episodes:</h2>
        <ul>
          {selectedSeason.episodes.map((episode) => (
            <li key={episode.id}>{episode.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShowContent;

