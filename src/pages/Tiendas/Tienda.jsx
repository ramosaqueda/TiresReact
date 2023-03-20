import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const Tienda = (id, title , image, address, description) => {
    console.log (image)
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          height='360'
          image={image}
          alt={id}
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary' noWrap>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button size='small' color='error'>
          Ver más
        </Button>
        <Typography variant='subtitle1' color='text.secondary' align='right'>
          {address} 
        </Typography>
        <Typography variant='subtitle2' color='text.secondary' align='right'>
          {description} 
        </Typography>
      </CardActions>
    </Card>
  )
}

export default Tienda