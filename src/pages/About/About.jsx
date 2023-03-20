import * as React from 'react';
import styled from "styled-components";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
const leyenda = "Inversiones Andes S.A.C.es una empresa regional especialistas en filtración y lubricación para vehículos y todo tipo de maquinaria pesada.Además, para este tipo de maquinaria manejamos todo tipo de repuestos y elementos de desgaste."


const About = () => {

    const Img = styled.img`
   
    width: 60%;
    `

    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
           <CssBaseline />
            
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
            <Img src="https://centromotor.cl/static/img/logo_napa-centromotor_rectangular.svg" alt="Centromotor"></Img>
                <Typography variant="h2" component="h1" gutterBottom>
                    Centromotor.cl
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {leyenda}

                </Typography>
                <Typography variant="body1">www.centromotor.cl.</Typography>
            </Container>

        </Box>
    )
}

export default About