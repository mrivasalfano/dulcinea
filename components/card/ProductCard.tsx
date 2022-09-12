import React, { FC } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

interface Props {
    imageUri: string;
    imageAlt: string;
    title: string;
    description: string;
    fullHeight?: boolean;
}

const ProductCard: FC<Props> = (props) => {
    const {imageUri, imageAlt, title, description, fullHeight} = props

    const cardHeight = fullHeight ? '100%' : 'auto'

    return (
        <Card sx={{height: cardHeight}}>
            <CardActionArea>
                <CardMedia
                component='img'
                image={imageUri}
                alt={imageAlt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard