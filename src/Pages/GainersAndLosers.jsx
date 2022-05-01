import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { url, headerHost, headerKey, urlGainer, urlLoser, headerHostLosers, headerKeyLosers } from '../config/api';
import { Container, LinearProgress, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, createTheme, ThemeProvider } from '@material-ui/core';
import { CryptoState } from '../CryptoContext';



export default function GainersAndLosers (){
  const [loading, setLoading] = useState(false);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);


  const options = {
    method: 'GET',
    url: `${urlGainer}`,
    headers: {
      'X-RapidAPI-Host': `${headerHost}`,
      'X-RapidAPI-Key': `${headerKey}`,
    }
  };

const optionsLosers = {
  method: 'GET',
  url: `${urlLoser}`,
  headers: {
    'X-RapidAPI-Host': `${headerHostLosers}`,
    'X-RapidAPI-Key': `${headerKeyLosers}`,
}
}

const fetchLosers = async () =>{
  setLoading(true); 
  await axios.request(optionsLosers).then(function (response) {
    console.log(response.data);
    const result = response.data.result;
    
    setLosers(result);
    setLoading(false);
  });
}
  
const fetchGainers = async () =>{ 
  setLoading(true); 
  await axios.request(options).then(function (response) {
    console.log(response.data);
    const result = response.data.result;
    
    setGainers(result);
    setLoading(false);
  });

}

useEffect(()=>{
  fetchGainers();
  fetchLosers();
}, []);

const darkTheme = createTheme({
  palette: {
      primary: {
          main: "#fff",
      },
      type: "dark"
  },
});



const useStyles = makeStyles(()=>({
  row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
          "&:hover":{
              backgroundColor: "#131111",
          },
      fontFamily: "Montserrat",
  },
}));

const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
    <Container style={{textAlign: "center"}}>
    <Typography variant="h6" style={{margin: 18, fontFamily: "Montserrat"}}>
        The top 10 <span style={{color: "rgb(14, 203, 129)"}}>Gainers</span> of the day
    </Typography>
    <Typography variant="p" style={{margin: 18, fontFamily: "Montserrat"}}>
      (Note that Gainers info. are available only in USD)
    </Typography>
    <TableContainer>
      {
        loading ? (
        <LinearProgress style={{backgroundColor: "gold"}}/>
        ) : (
          <Table>
            <TableHead style={{backgroundColor: "#EEBC1D"}}>
              <TableRow>
              {["Name", "Price", "1d Change"].map((head)=>(
                  <TableCell style={{color: "black", fontWeight: "700", fontFamily: "Montserrat",}} key={head} align={head === "Name" ? "": ""}>
                      {head}
                  </TableCell>
              ))} 
              </TableRow>
            </TableHead>
            <TableBody>
              {gainers.map((gain) =>
                  <>
                  <TableRow key={gain.name}>
                  <TableCell component="th" scope="row" style={{display: "flex", gap: 15, color: "white"}} >
                    <div style={{display: "flex", flexDirection: "column"}}>
                      <span style={{textTransform: "uppercase", fontSize: 14,}}>{gain.name}</span>
                    </div>
                  </TableCell>
                  <TableCell style={{color: "white"}} >
                    {gain.price}
                  </TableCell>
                  <TableCell style={{color: "rgb(14, 203, 129)"}} >
                    +{gain.onedaychange}
                  </TableCell>
                  </TableRow>
                  </>
                )
              }
            </TableBody>
          </Table>   
        )
      }
    </TableContainer>
    <Typography variant="h6" style={{margin: 18, fontFamily: "Montserrat"}}>
        The top 10 <span style={{color: "red"}}>Losers</span> of the day
    </Typography>
    <Typography variant="p" style={{margin: 18, fontFamily: "Montserrat"}}>
      (Note that Losers info. are available only in USD)
    </Typography>
    <TableContainer>
      {
        loading ? (
        <LinearProgress style={{backgroundColor: "gold"}}/>
        ) : (
          <Table>
            <TableHead style={{backgroundColor: "#EEBC1D"}}>
              <TableRow>
              {["Name", "Price", "1d Change"].map((head)=>(
                  <TableCell style={{color: "black", fontWeight: "700", fontFamily: "Montserrat",}} key={head} align={head === "Name" ? "": ""}>
                      {head}
                  </TableCell>
              ))} 
              </TableRow>
            </TableHead>
            <TableBody>
              {losers.map((loser) =>
                  <>
                  <TableRow key={loser.name}>
                  <TableCell component="th" scope="row" style={{display: "flex", gap: 15, color: "white"}} >
                    <div style={{display: "flex", flexDirection: "column"}}>
                      <span style={{textTransform: "uppercase", fontSize: 14,}}>{loser.name}</span>
                    </div>
                  </TableCell>
                  <TableCell style={{color: "white"}} >
                    {loser.price}
                  </TableCell>
                  <TableCell style={{color: "red"}} >
                    -{loser.onedaychange}
                  </TableCell>
                  </TableRow>
                  </>
                )
              }
            </TableBody>
          </Table>   
        )
      }
    </TableContainer>

    </Container>
    </ThemeProvider>
  ) 
} 