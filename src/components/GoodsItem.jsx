import React from 'react';
import {Grid, Card, CardMedia,CardContent, Typography, CardActions, Button} from "@mui/material"

const GoodsItem = (props) => {
    const { name, price, poster, setOrder } = props;

    return (
        <Grid item xs={12} md={4} >
            <Card sx={{height:'100%'}}>
                
                <CardMedia
                    component="img"
                    image={poster}
                    title={name}
                    alt={name}
                    sx={{height:140}}
                />
                <CardContent>
                    <Typography variant="h6" component="h3">{name}</Typography>
                    <Typography variant="body1" >Цена: {price} тг.</Typography></CardContent>
                    <CardActions>
                    <Button variant="text"
                        className='btn btn-primary'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                    </CardActions>
                </Card>
        </Grid>
    );
};

export default GoodsItem;