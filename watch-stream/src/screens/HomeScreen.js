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
      1: 'Crime',
      2: 'True Crime',
      3: 'History',
      4: 'Entertainment',
      5: 'Biography',
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
        <Row 
          title = 'NETFLIX ORIGINALS'
          fetchUrl = {requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title ='Crime' fetchUrl = {requests.fetchTrending}/>
        <Row title ='True Crime' fetchUrl = {requests.fetchTopRated}/>
        <Row title ='History' fetchUrl = {requests.fetchActionMovies}/>
        <Row title ='Entertainment' fetchUrl = {requests.fetchComedyMovies}/>
        <Row title ='Biography' fetchUrl = {requests.fetchHorrorMovies}/>
        <Row title ='Kids and Family' fetchUrl = {requests.fetchRomanceMovies}/> 
         <Row title ='Documentaries' fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen