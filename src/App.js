import logo from './logo.svg';
import './App.css';
import CategoryCard from './CategoryCard';
import { Button, Card, Grid, Typography } from '@mui/material';
import strat from "./images/strat.jpeg"
import tele from "./images/tele.jpeg"
import jazzmaster from "./images/jazzmaster.jpg"


function App() {
  return (
    <div className="App">
      <Grid container spacing={0} sx={{ height: '50vh', width: '70vh', position: 'relative', top: '13vh', left: '34vw' }}>
        <Grid item xs={6}>
          <Card sx={{ border: '1px solid black', height: '20vh', width: '90%', margin: '6%', bgcolor: 'black', textAlign:'left'}}>
            <Typography variant='h4' color='white' margin={'3%'}>Explore a wide range of guitars and more</Typography>
            <Button variant='outlined' sx={{border:'1px solid grey', color:'white', marginLeft:'3%'}}>Explore Shop</Button>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <CategoryCard image={strat} message={'Stratocaster'} />
        </Grid>
        <Grid item xs={6}>
          <CategoryCard image={tele} message={'Telecaster'} />
        </Grid>
        <Grid item xs={6}>
          <CategoryCard image={jazzmaster} message={'Jassmaster'} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
