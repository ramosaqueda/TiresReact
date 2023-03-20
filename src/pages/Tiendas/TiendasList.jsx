import * as React from 'react';
import Grid from '@mui/material/Grid';
import Tienda from './Tienda'; 
 

const TiendasList = ({ items }) => {
 return (
     <div>
      <h2>Tiendas</h2>
      <hr />

      <Grid >
        {items?.map((item) => (
          <Grid item xs={12} sm={6} lg={3} key={item.id}>
            console.log(item)
            <Tienda {...item} />
          </Grid>
        ))}
      </Grid>
      </div>
    )

}

export default TiendasList