import type { NextPage } from 'next'
import Card from '../components/card/Card'
import Header from '../components/header/Header'
import chajaImg from '../public/images/products/cakes/chaja.jpg'
import mousseImg from '../public/images/products/cakes/mousse.jpg'
import cocoImg from '../public/images/products/cakes/coco.jpg'
import rogelImg from '../public/images/products/cakes/rogel.jpg'
import Cards from '../components/card/Cards'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Cards>
        <Card 
          image={chajaImg} 
          title="Torta chajá" 
          description="Este frío, está para café con torta. Chajá de durazno con crema y dulce de leche."
        />
        <Card 
          image={mousseImg} 
          title="Torta mousse" 
          description="¡Esta torta con mouse de chocolate y dulce de leche te está llamando!"
        />
        <Card 
          image={cocoImg} 
          title="Torta coco" 
          description="Torta de coco rellena con dulce de leche."
        />
        <Card 
          image={rogelImg} 
          title="Torta rogel" 
          description="Probá este clásico hecho por nosotros."
        />
      </Cards>
    </>
  )
}

export default Home
