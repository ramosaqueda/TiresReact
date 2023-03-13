import { useState, useEffect, useCallback, useMemo } from "react";
 
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline'
 
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
import CardHeader  from '@mui/material/CardHeader';
 

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
 
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';


import {WheelSize} from '../../api/WheelSize'

 

const Finder = () => {
  const [makes,SetMakes] = useState([])
  const [make,SetMake] = useState()
  const [models,SetModels] = useState([])
  const [model,SetModel] = useState()
  const [years,SetYears] = useState([])
  const [year,SetYear] = useState()
  const [generations,SetGenerations] = useState([])
  const [byModel,SetByModel] = useState({})
  const [genImage,SetGenImage] = useState([])

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
    //recursiveJsonParser(byModel);

  }

  function recursiveJsonParser(objeto) {
    const objResp=new Array();
      for (var propiedad in objeto) {
        console.log(propiedad);
        if (objeto.hasOwnProperty(propiedad)) {
          if (typeof objeto[propiedad] == "object") {
            recursiveJsonParser(objeto[propiedad]);
          } else {
           //console.log(propiedad + " : " + objeto[propiedad]);
            if (propiedad == "generation") {
            // objResp[propiedad] = objeto[propiedad];
             objResp.push({image:objeto[propiedad]});
             SetGenerations(objeto[propiedad]);
             //console.log(generations);
          }
        }
      
      }
     
    }
  //  SetGenImage(objResp)
   // console.log(genImage)
  }

  useEffect(() => {
    fetchAllMakes();
 
  }, []);


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


      <div>
 

      {byModel.length &&
        byModel.map((m) => (
         

          <Card sx={{ maxWidth: 345 }}>
          <CardHeader
        
           
            title={m.generation.bodies[0].name}
            subheader={m.generation.bodies[0].slug}
          />
          <CardMedia
            component="img"
            height="194"
            image={m.generation.bodies[0].image}
            alt={m.generation.bodies[0].name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">

               <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <LocalGasStationIcon />
 
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Tipo Combustible" secondary={m.engine.fuel} />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <SettingsApplicationsIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Tipo motor" secondary={m.engine.type}/>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <BeachAccessIcon />
                      </Avatar>
                    </ListItemAvatar>
                  
                      <ListItemText  primary="Motor"  
                      secondary={
                        <>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                           PS: {m.engine.power.PS}
                           KW:{m.engine.power.KW}
                           HP :{m.engine.power.HP}
                          </Typography>
                          
                        </>
                      } />
           
                  </ListItem>
                </List>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
           
         
          </CardActions>
         
        </Card>



        ))
      }
      </div>
        


      
      
      
     
      

         
    </Box>
    </Container>  
    </>
  )
}

export default Finder