import { Paper, Button , Typography} from '@mui/material'
import React from 'react'

import styled from 'styled-components'
 
const Items = ({ item }) => {
  const Title = styled.h2`
 
  position: absolute;
  top: 70%;
  left: 10%; 
  color: #fff;
  font-size: 3rem;
  text-align: left;
  z-index: 1;
  margin: 0;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-variant: small-caps slashed-zero;
  color:#E7B83A

`;

const PDesc = styled.p`
    position: absolute;
    top: 84%;
    left: 10%;
    color: #fff;
    font-size: 1.2rem;
    text-align: left;
    z-index: 1;
    margin: 0;
    padding: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-style: italic;

`;


  const carouselContainer = styled.div` 
      position: relative;
`;

const MyImg = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
`;


 

 

  return (
 


        <carouselContainer>
          <MyImg src={item.image} alt='project'></MyImg>
          <Title>{item.title}</Title>
          <PDesc>{item.description}</PDesc>
      </carouselContainer>
     
 


     
  )

}

export default Items