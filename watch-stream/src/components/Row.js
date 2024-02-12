import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Row.css';
import axios from '../axios';
import ShowContent from './showContent';

function Row(props) {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const title = props.title;
  const navigate = useNavigate();

  useEffect(() => {
    setShows(props.shows);
  }, [props.shows]);

  function handleClick(show) {
    setSelectedShow(show);
    navigate(`/id/${show.id}`);
  }

  const base_url = 'https://podcast-api.netlify.app/shows';

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {shows
          ? shows.map((show) => (
              <div className='show' key={show.id} onClick={() => handleClick(show)}>
                <img className='row_poster' src={show.image} alt={show.title} />
                <h6>{show.title}</h6>
                <h6>{show.seasons} Seasons</h6>
                <h6>Last updated: {new Date(show.updated).toLocaleDateString('en-US')}</h6>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Row;

