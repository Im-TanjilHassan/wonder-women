import { Container } from '@mui/material';
import * as React from 'react';
import './HomeService.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import hairCut from '../../../images/serviceimg/hairandskincarepic/hairCut.jpg'
import skinCare from '../../../images/serviceimg/hairandskincarepic/skinCare.jpg'
import hairCare from '../../../images/serviceimg/hairandskincarepic/hairCare.jpg'

import nailPolish from '../../../images/serviceimg/nailpolishAndSpa/nailPolish.jpg'
import spa from '../../../images/serviceimg/nailpolishAndSpa/spa.jpg'
import nailCare from '../../../images/serviceimg/nailpolishAndSpa/nailCare.jpg'

// import bride1 from '../../../images/serviceimg/bride/bride3.jpeg'
// import bride2 from '../../../images/serviceimg/bride/bride1.jpg'
// import bride3 from '../../../images/serviceimg/bride/bride2.jpg'

const hairSkinCare = [
    {
        id: 1,
        img: hairCut,
        description: 'Different people has different test and unique style sens. Our Skillful Barber are always ready to cut your hair as your own custom shape.',
        title: 'Stylish Hair Cut'
    },
    {
        id: 2,
        img: skinCare,
        description: "Upgrade your skincare routine with these healthy and glowy products hand-picked by dermatologists, estheticians",
        title: 'Skin Care'
    },
    {
        id: 3,
        img: hairCare,
        description: 'Summer had set in and it is time of the year you need to take extra care of your hair and scalp, to make your mane looks at its very best.',
        title: 'Summer Hair Care'
    }
]

const nailAndSpa = [
    {
        id: 1,
        img: nailPolish,
        description: 'We have some great nail polish expert. Who are always ready to color your nail as you want baby',
        title: 'Nail Polish'
    },
    {
        id: 2,
        img: spa,
        description: 'for relaxing and enjoy sound environment we have arrange spa facilities.',
        title: 'Spa'
    },
    {
        id: 3,
        img: nailCare,
        description: 'for your rough nail we give the best care to your nail. ',
        title: 'Nail Care'
    },
]

// const bride = [
//     {
//         id: 1,
//         img: bride1,
//         description: 'We also provide cultural bride dress up. for every culture has its own bridal look and it make it more beautiful',
//         title: 'Bride'
//     },
//     {
//         id: 2,
//         img: bride2,
//         description: 'We also provide cultural bride dress up. for every culture has its own bridal look and it make it more beautiful',
//         title: 'Bride'
//     },
//     {
//         id: 3,
//         img: bride3,
//         description: 'We also provide cultural bride dress up. for every culture has its own bridal look and it make it more beautiful',
//         title: 'Bride'
//     },
// ]

const HomeService = () => {

    return (
        <div className='homeServices'>
            <Container>
                <h2 className='sectionTitle'>Our Services</h2>
                <p className='serviceText'>we provide the best services ever. There are various service u can have here are some most popular services:</p>

                <div>
                    <h3> <u>Hair & Skin Care</u> </h3>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {hairSkinCare.map((care, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Card className='card' sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={care.img}
                                                alt="Hair and Skin care"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {care.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {care.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <h3 className='rightSide-title'> <u>Nail & Spa</u> </h3>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {nailAndSpa.map((care, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Card className='card' sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={care.img}
                                                alt="Hair and Skin care"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {care.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {care.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    {/* <h3 className='service-title'> <u>Bride Special</u> </h3>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {bride.map((care, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Card className='card' sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={care.img}
                                                alt="Hair and Skin care"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {care.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {care.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box> */}
                </div>


            </Container>
        </div>
    );
};

export default HomeService;