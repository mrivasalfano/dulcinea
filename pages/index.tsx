import type { NextPage } from 'next'
import CalculateOrder from '../components/calculate-order/CalculateOrder'
import Head from 'next/head'
import { Container, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography,} from '@mui/material'
import ProductSlider from '../components/product-slider/ProductSlider'
import Navbar from '../components/Navbar/Navbar'
import FloatingBox from '../components/floating-box/FloatingBox'

const products = [{
    imageUri: '/images/products/cakes/chaja.jpg',
    imageAlt: "Torta chajá",
    title: "Torta chajá",
    description: 'Este frío, está para café con torta. Chajá de durazno con crema y dulce de leche.'
  },
  {
    imageUri: '/images/products/cakes/mousse.jpg',
    imageAlt: "Torta coco",
    title: "Torta coco",
    description: 'Torta de coco rellena con dulce de leche.'
  },
  {
    imageUri: '/images/products/cakes/coco.jpg',
    imageAlt: "Torta chajá",
    title: "Torta chajá",
    description: 'Este frío, está para café con torta. Chajá de durazno con crema y dulce de leche.'
  },
  {
    imageUri: '/images/products/cakes/chaja.jpg',
    imageAlt: "Torta chajá",
    title: "Torta chajá",
    description: 'Este frío, está para café con torta. Chajá de durazno con crema y dulce de leche.'
  },
  {
    imageUri: '/images/products/cakes/rogel.jpg',
    imageAlt: "Torta rogel",
    title: "Torta rogel",
    description: 'Probá este clásico hecho por nosotros.'
}]

const navbarSections = [{
  label: 'Inicio',
  href: '#home'
},
{
  label: 'Productos',
  href: '#products'
},
{
  label: 'Herramientas',
  href: '#tools'
}]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <header>
        <Navbar sections={navbarSections}/>
      </header>
      <Container id="home">
        <Typography variant='h4'>Bienvenido a Dulcinea!</Typography>
      </Container>
      <Container id="products">
        <Typography variant='h5'>Nuestros productos</Typography>
        <ProductSlider products={products}/>
      </Container>
      <FloatingBox></FloatingBox>    
    </>
  )
}

export default Home
