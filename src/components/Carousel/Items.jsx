import { Paper, Button} from '@mui/material'
import React from 'react'
 
import styled from 'styled-components'

const Items = ({item}) => {
  const Title = styled.h2`
    font-size: 3.8rem;
    font-weight: 700;
    letter-spacing: .3rem;
    text-shadow: .1rem .1rem .8rem black;
    padding-bottom: 1rem;

`;


const carouselContainer = styled.div` 
  position: relative;
  
`;
const carruselHeader = styled.div`
 position:absolute;
  top:100%;
 
  transform: translate(-50%,-50%);
  z-index: 100;
`;

const carruselImg = styled.img`
 position:absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 100;
`;

  return (
 
    <carouselContainer>
            
             <carruselHeader>
              <Title>{item.title}</Title>
                 
            </carruselHeader>
            <img src={item.image} alt={item.title} style={{width:"100%", height:"100%"}}/>
   </carouselContainer>
  )

}

export default Items