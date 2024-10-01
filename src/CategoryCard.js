import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";
import strat from './images/strat.jpeg'

export default function CategoryCard({ image, message }) {

    return (
        <Card sx={{ border: '1px solid black', height: '20vh', width: '90%', margin: '6%', bgcolor: 'black' }}>
            <CardActionArea>
                <img src={image} className="cardImage" style={{ width: '100%', position: 'relative', bottom: "4vh", zIndex: '0' }} />
                <CardContent sx={{ borderTop: '1px solid white', position: 'absolute', top: '13.5vh', width: '100%', background: 'rgb(0,0,0,0.25)' }}>
                    <Typography variant="h5" sx={{ color: 'white', float: 'left' }}>
                        {message}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}