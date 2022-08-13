import type { NextPage } from 'next'
import ButtonCustom from '../components/buttons/ButtonCustom'
import { Text } from "@nextui-org/react"
const Home: NextPage = () => {
  return (
    <div>
      <ButtonCustom>click</ButtonCustom>
      <Text css={{ background: '$myColor' }}>NextUI colors</Text>
    </div>
  )
}

export default Home
