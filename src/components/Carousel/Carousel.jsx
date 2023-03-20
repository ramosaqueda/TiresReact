import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Items';
import slider from "../../data/slider.json"
import { WidthFull } from '@mui/icons-material';
const MyCarousel = (props) => {
   
  return (
    <Carousel>
            {
                slider.map( (item, i) => <Item key={i} item={item} /> )
            }
    </Carousel>
  )
}

export default MyCarousel

 