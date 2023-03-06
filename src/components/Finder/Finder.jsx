import { useState, useEffect, useCallback, useMemo } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline'

import Avatar from '@mui/material/Avatar';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import Typography from '@mui/material/Typography'


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


import {WheelSize} from '../../api/WheelSize'

 

const Finder = () => {
  const [makes,SetMakes] = useState([])
  const [make,SetMake] = useState()
  const [models,SetModels] = useState([])
  const [model,SetModel] = useState()
  const [years,SetYears] = useState([])
  const [year,SetYear] = useState()
  const [generations,SetGenerations] = useState([])
  const [byModel,SetByModel] = useState([])


  const [modifications, SetModifications] = useState([])
  const [modification, SetModification] = useState()
 async function fetchAllMakes() {
    const allMakes = await WheelSize.fetchMakes();  
    if (allMakes.length > 0) {      
      SetMakes(allMakes);
      
    }

  }

  async function fetchModels(make) {
    const allModels = await WheelSize.fetchModels(make);
    SetModels(allModels);
  }

  async function fetchYears(make,model) {
    const allYears = await WheelSize.fetchYear(make,model);
    SetYears(allYears);
  }

  async function fetchModification(make,model,year) {
    const allModification = await WheelSize.fetchModification(make,model,year);
    SetModifications(allModification);
  }

  async function fetchByModel(make,model,year,modification) {
    const allByModels = await WheelSize.fetchByModel(make,model,year,modification)
    SetByModel(allByModels)
  }


  useEffect(() => {
   fetchAllMakes()
  }, []);


  ;

  const handleChangeMake = (event) => { 
    SetMake(event.target.value)   
    fetchModels(event.target.value); 
  }

  const handleChangeModel = (event) =>{
     
    SetModel(event.target.value);
    fetchYears(make,event.target.value)
  }

  const handleChangeYear = (event) =>{
    SetYear(event.target.value);
    fetchModification(make,model, event.target.value)

  }

  const handleModifications = (event) =>{
    SetModification(event.target.value);
    fetchByModel(make,model,year,event.target.value) 

  }


  return (
    <>    
    <Container component="main" sx={{  paddingTop:'90px'}}>
    <CssBaseline />
  
   
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }} >
            <ScreenSearchDesktopIcon />
     </Avatar>
    <Typography  variant="h4" align="center">
            Buscador de Medidas
    </Typography>
  
    <Box component="form"  sx={{ mt: 1, display:'flex', alignItems:'flex-start', flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'center' }}>
          <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="demo-simple-select-helper-label">Marca</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper" 
              label="Marca"              
               
              onChange={handleChangeMake}              
            >
           
           {makes.map((m) => (<MenuItem id  ={m.slug} value={m.slug}>{m.name}</MenuItem>))}
           
          </Select>
          </FormControl>
         
        
        
        <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="modelo_label">Modelo</InputLabel>
            <Select
              labelId="modelo_label"
              id="modelo-select-helper" 
              label="Modelo" 
              defaultValue="" 
              onChange={handleChangeModel}             
            >
             
           {models.map((m) => (<MenuItem id  ={m.slug} value={m.slug}>{m.name}</MenuItem>))}

          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="year_label">Año</InputLabel>
            <Select
              labelId="year_label"
              id="year-select-helper" 
              label="Año"
              defaultValue=""   
              onChange={handleChangeYear}                 
            >
             {years.map((y) => (<MenuItem id  ={y.slug} value={y.slug}>{y.name}</MenuItem>))}
          </Select>
        </FormControl>
         
        <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="modificacion_label">Modificación</InputLabel>
            <Select
              labelId="modificacion_label"
              id="modificacion-select-helper" 
              label="Modificación" 
              defaultValue=""   
              onChange={handleModifications}           
            >
            {modifications.map((m) => (<MenuItem id  ={m.slug} value={m.slug}>{m.name}</MenuItem>))}
          </Select>
        </FormControl>



      { byModel.map((g) => 


      
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image='{g.data.bodies.image}'
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      
      
      ) }  
      

         
    </Box>
    </Container>  
    </>
  )
}

export default Finder