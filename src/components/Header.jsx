import { AppBar, Container, createTheme, Menu, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import {useNavigate} from "react-router-dom";
import { CryptoState } from '../CryptoContext';



const useStyles = makeStyles(()=>({
  Title: {
    flex: 1,
    color: "#A82BE2",
    fontWeight: 'bold',
    cursor: 'pointer',
    fontFamily: 'Montserrat'
  }
}))
const Header = () => {

  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const history = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
  <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography onClick={()=> history("/")} className={classes.Title} variant="h6">
            CryptoMania
          </Typography>
          <Select value={currency} onChange={(e) => setCurrency(e.target.value)} variant='outlined' style={{width: 100, height: 40, marginRight: 15}}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"GBP"}>GBP</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  </ThemeProvider>
  )
};

export default Header;