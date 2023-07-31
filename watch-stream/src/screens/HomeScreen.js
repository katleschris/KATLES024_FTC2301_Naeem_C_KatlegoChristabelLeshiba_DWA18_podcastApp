import React , {useEffect, useState} from 'react'
import './HomeScreen.css'
import { supabase } from './Client'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import requests from "../Requests"
import Row from '../components/Row'
import { useNavigate } from 'react-router-dom'

function HomeScreen(props) {
  const [groupedShows, setGroupedShows] = useState({})
  useEffect( () => {
    aggregateGenres()
    }, [])
    console.log(groupedShows)

    const genreTitles = {
      1: 'Crime',
      2: 'True Crime',
      3: 'History',
      4: 'Entertainment',
      5: 'Biography',
      9: 'Kids & Family',
      // 8: ''
    };

    
    function aggregateGenres() {
      const groupedShows = {};
    
      props.shows.forEach((show) => {
        show.genres.forEach((genreID) => {
          if (!groupedShows[genreID]) {
            groupedShows[genreID] = [];
          }
          groupedShows[genreID].push(show);
        });
      });
    
      // Convert genre IDs to genre titles
      const aggregatedGenres = {};
      Object.keys(groupedShows).forEach((genreID) => {
        const genreTitle = genreTitles[genreID];
        aggregatedGenres[genreTitle] = groupedShows[genreID];
      });
      setGroupedShows(aggregatedGenres);

    }

  return (
    <div className='homescreen'>
        <Nav />
        <br></br>
        <Banner />
        <Row title ='True Crime' shows = {groupedShows['True Crime']}/>
        <Row title ='History' shows = {groupedShows['History']}/>
        <Row title ='Biography' shows = {groupedShows['Biography']}/>
        <Row title ='Crime' shows = {groupedShows['Crime']}/>
        <Row title ='Entertainment' shows = {groupedShows['Entertainment']}/>
        <Row title ='Kids and Family' shows = {groupedShows['Kids and Family']}/> 
    </div>
  )
}

export default HomeScreen