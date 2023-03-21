import * as React from 'react';
import Grid from '@mui/material/Grid';
import Tienda from './Tienda'; 
 

const TiendasList = ({ items }) => {
 return (
     <div>
      <h2>Tiendas</h2>
      <hr />
 
      <Grid container spacing={4} py={3}>

        {items?.map((item) => (
          <Grid item xs={12} sm={6} lg={3} key={item.id}> 
            <Tienda {...item} />
          </Grid>
        ))}
      </Grid>
      
      </div>
    )

}

export default TiendasList