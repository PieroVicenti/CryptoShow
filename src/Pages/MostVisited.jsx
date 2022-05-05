import {React, useState, useEffect} from 'react'
import axios from "axios";
import { Container, LinearProgress, TableContainer, Typography } from '@material-ui/core';


const MostVisited = () => {
    const [loading, setLoading] = useState(false);
    const [visited, setVisited] = useState([]);

    const optionsVisited = {
        method: 'GET',
        url: 'https://crypto-tracker.p.rapidapi.com/api/mostvisited',
        headers: {
          'X-RapidAPI-Host': 'crypto-tracker.p.rapidapi.com',
          'X-RapidAPI-Key': 'e3fb9b7550mshdf0c22c13e820cap1a77bdjsn1d3d1cb2a398'
        }
      };
      
      axios.request(optionsVisited).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

      const fetchMostVisited = async () =>{
        setLoading(true); 
        await axios.request(optionsVisited).then(function (response) {
          console.log(response.data);
          const result = response.data.result;
          
          setVisited(result);
          setLoading(false);
        });
      }

      useEffect(()=>{
        fetchMostVisited();
      }, []);

  return (
    <>
    <Container style={{marginTop: 50, display: "flex", justifyContent: "center"}} >
    <Typography variant="h6" style={{fontFamily: "Montserrat", color: "gold"}}>The most visited Crypto of the last 24H</Typography>
    </Container>
    {loading ? (<LinearProgress style={{backgroundColor: "gold"}}/>) : (
    <Container>
    {visited.map((visit) =>
    <>
    <Container style={{marginTop: 20, display: "flex", justifyContent: "center"}} >
        <Typography variant="p" style={{fontFamily: "Montserrat"}}>{visit.rank} - {visit.name} - Current price: {visit.price} - 24h change: <span style={{color: "rgb(14, 203, 129)"}}>{visit.onedaychange}</span></Typography>
    </Container>
    </>    
    )}
    </Container>
    )}
    </>
  )
}

export default MostVisited