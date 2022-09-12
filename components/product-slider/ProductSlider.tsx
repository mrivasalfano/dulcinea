import { Box } from '@mui/material';
import React, { FC } from 'react'
import Carousel from 'react-multi-carousel';
import ProductCard from '../card/ProductCard';
import "react-multi-carousel/lib/styles.css";
import { useTheme } from '@mui/system';

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
    const theme = useTheme()

    const partialVisibilityGutter = 40

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: theme.breakpoints.values.xl, min: theme.breakpoints.values.lg },
          items: 3,
          partialVisibilityGutter
        },
        desktop: {
          breakpoint: { max: theme.breakpoints.values.lg, min: theme.breakpoints.values.md },
          items: 3,
          partialVisibilityGutter
        },
        tablet: {
          breakpoint: { max: theme.breakpoints.values.md, min: theme.breakpoints.values.sm },
          items: 2,
          partialVisibilityGutter
        },
        mobile: {
          breakpoint: { max: theme.breakpoints.values.sm, min: 0 },
          items: 1,
          partialVisibilityGutter
        }
      };

    return (
        <Carousel 
          responsive={responsive} 
          showDots 
          autoPlay 
          arrows={false}
          partialVisible
          rewind
          rewindWithAnimation
        >
            {products.map((product, index) => (
                <Box
                  className='hola'
                  key={index} 
                  sx={{marginX: 1, height: '100%'}}
                >
                    <ProductCard
                        imageUri={product.imageUri}
                        imageAlt={product.imageAlt}
                        title={product.title} 
                        description={product.description}
                        fullHeight
                    />
                </Box>
            ))}
        </Carousel>
    )
}

export default ProductSlider