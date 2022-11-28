

import React from 'react'
import {Grid,Card,CardActionArea,CardContent,CardMedia,Typography} from '@mui/material'
import img from './Images/lakshmi.png';
import img1 from './Images/vishnu.jpeg'
import img2 from './Images/durga.jpeg'


const Cardlayput = () => {
  return (
    <>
    <div style={{marginTop:"30px",marginLeft:"25px"}}>
    <Grid classname="grid" container spacing={2}>
        <Grid item xs={3} md={2}>
            

    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h13" component="div">
            Saraswati
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Saraswati is symbol of knowldege and wisdom,knowldege
            is supremely alluring
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid> 

    <Grid item xs={3} md={2}>
            

    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={img1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h13" component="div">
            Vishnu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Vishnu is symbol of knowldege and wisdom,knowldege
            is supremely alluring
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid> 

    <Grid item xs={3} md={2}>
            

    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={img2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h13" component="div">
            Durga
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Durga is symbol of knowldege and wisdom,knowldege
            is supremely alluring
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid> 

    <Grid item xs={3} md={2}>
            

    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h13" component="div">
            Saraswati
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Saraswati is symbol of knowldege and wisdom,knowldege
            is supremely alluring
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid> 
    <Grid item xs={3} md={2}>
            

    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={img1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h13" component="div">
            Vishnu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Vishnu is symbol of knowldege and wisdom,knowldege
            is supremely alluring
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid> 

    <Grid item xs={3} md={2}>
            

    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={img2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h13" component="div">
            Durga
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Durga is symbol of knowldege and wisdom,knowldege
            is supremely alluring
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid> 

    </Grid>
    </div>
    </>
  )
}

export default Cardlayput