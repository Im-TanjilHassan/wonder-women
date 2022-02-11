import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './singleService.css'

const HomeSingleService = ({ service }) => {

    const { imgUrl, title, description, price } = service

    return (
        <Box>
            <Card className='service-card'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={imgUrl}
                        alt="Hair and Skin care"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="p" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="h5" color="text.dark" sx={{ mt: '3%' }}>
                            Price: ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default HomeSingleService;