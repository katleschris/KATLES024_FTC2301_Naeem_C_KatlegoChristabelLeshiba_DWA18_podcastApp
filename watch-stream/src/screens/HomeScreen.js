import React , {useEffect} from 'react'
import './HomeScreen.css'
import { supabase } from './Client'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import requests from "../Requests"
import Row from '../components/Row'
import { useNavigate } from 'react-router-dom'

function HomeScreen() {
  // useEffect( async () => {
  //     console.log('rqz',requests.shows)
  //   }, [])
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
        <Row title ='Trending Now' fetchUrl = {requests.fetchTrending}/>
        <Row title ='Top Rated' fetchUrl = {requests.fetchTopRated}/>
        <Row title ='Action Movies' fetchUrl = {requests.fetchActionMovies}/>
        <Row title ='Comedy Movies' fetchUrl = {requests.fetchComedyMovies}/>
        <Row title ='Horror Movies' fetchUrl = {requests.fetchHorrorMovies}/>
        <Row title ='Romance Movies' fetchUrl = {requests.fetchRomanceMovies}/>
        <Row title ='Documentaries' fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen