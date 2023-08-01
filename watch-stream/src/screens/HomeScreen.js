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

    const genreTitles = {
      1: 'Personal Growth',
      2: 'Investigative Journalism',
      3: 'History',
      4: 'Comedy',
      5: 'Entertainment',
      6: 'Business',
      7: 'Fiction',
      8: 'News',
      9: 'Kids & Family',
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
        <Row title ='Entertainment' shows = {groupedShows['Entertainment']}/>
        <Row title ='Fiction' shows = {groupedShows['Fiction']}/> 
        <Row title ='Kids & Family' shows = {groupedShows['Kids & Family']}/> 
        <Row title ='Investigative Journalism' shows = {groupedShows['Investigative Journalism']}/>
        <Row title ='History' shows = {groupedShows['History']}/>
        <Row title ='Personal Growth' shows = {groupedShows['Personal Growth']}/>
        <Row title ='Business' shows = {groupedShows['Business']}/> 
        <Row title ='News' shows = {groupedShows['News']}/> 
        <Row title ='Comedy' shows = {groupedShows['Comedy']}/>

    </div>
  )
}

export default HomeScreen