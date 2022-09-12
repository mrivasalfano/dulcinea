import { Box } from '@mui/material';
import React, { FC } from 'react'
import Carousel from 'react-multi-carousel';
import ProductCard from '../card/ProductCard';
import "react-multi-carousel/lib/styles.css";

interface Product {
    imageUri: string;
    imageAlt: string;
    title: string;
    description: string;
}

interface Props {
    products: Product[];
}

const ProductSlider: FC<Props> = (props) => {
    const {products} = props

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <Carousel responsive={responsive}>
            {products.map((product, index) => (
                <Box sx={{marginX: 1}}>
                    <ProductCard
                        key={index}
                        imageUri={product.imageUri}
                        imageAlt={product.imageAlt}
                        title={product.title} 
                        description={product.description}
                    />
                </Box>
            ))}
        </Carousel>
    )
}

export default ProductSlider