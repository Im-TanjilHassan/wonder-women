import React, { useEffect } from 'react';
import './Riview.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import emma from '../../../images/review user/emma.jpg'
import ReviewBox from './review box/ReviewBox';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Review = () => {

    useEffect(() => {
        Aos.init({ duration: 1700 })
    }, [])

    return (
        <div data-aos="zoom-in" className='review'>
            <h2 className='sectionTitle'>People's Review</h2>
            <Container>
                <div>
                    <Box sx={{ flexGrow: 1, mb: '7%' }}>
                        <Grid sx={{ mx: 'auto' }} container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Card className='review-card' sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={emma}
                                            alt="emma watson user"
                                            sx={{ borderRadius: '50%', width: '100px', border: '2px solid rgb(250, 66, 97)', mx: 'auto' }}

                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Emma Watson
                                            </Typography>
                                            <Typography sx={{ color: 'white', mb: '8px' }} variant="body2" color="text.secondary">
                                                What an amazing parlor they have. so peaceful and sound environment
                                            </Typography>
                                            <Stack>
                                                <Rating sx={{ mx: 'auto' }} name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                            </Stack>

                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card className='review-card' sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={emma}
                                            alt="emma watson user"
                                            sx={{ borderRadius: '50%', width: '100px', border: '2px solid rgb(250, 66, 97)', mx: 'auto' }}

                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Emma Watson
                                            </Typography>
                                            <Typography sx={{ color: 'white', mb: '8px' }} variant="body2" color="text.secondary">
                                                What an amazing parlor they have. so peaceful and sound environment
                                            </Typography>
                                            <Stack>
                                                <Rating sx={{ mx: 'auto' }} name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                            </Stack>

                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card className='review-card' sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={emma}
                                            alt="emma watson user"
                                            sx={{ borderRadius: '50%', width: '100px', border: '2px solid rgb(250, 66, 97)', mx: 'auto' }}

                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Emma Watson
                                            </Typography>
                                            <Typography sx={{ color: 'white', mb: '8px' }} variant="body2" color="text.secondary">
                                                What an amazing parlor they have. so peaceful and sound environment
                                            </Typography>
                                            <Stack>
                                                <Rating sx={{ mx: 'auto' }} name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                            </Stack>

                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                    <ReviewBox />
                </div>
            </Container >
        </div >
    );
};

export default Review;