import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { FC, useState } from 'react'

enum OrderType {
    TEA,
    DINNER
}

const CalculateOrder: FC = () => {
    const [total, setTotal] = useState(0)
    const [adults, setAdults] = useState(0)
    const [kids, setKids] = useState(0)
    const [orderType, setOrderType] = useState(OrderType.TEA)

    const calculateOrder = () => {
        let total = 0

        if (orderType === OrderType.TEA)
            total = (adults * 7) + (kids * 4)
        else if (orderType === OrderType.DINNER)
            total = (adults * 11) + (kids * 7)

        setTotal(total)
    }

    const handleOrderType = (e: any) => {
        const newOrderTypeIndex: number = parseInt(e.target.value)
        setOrderType(newOrderTypeIndex)
    }

    const handleAdults = (e: any) => {
        const newAdults: number = parseInt(e.target.value)
        setAdults(newAdults)
    }

    const handleKids = (e: any) => {
        const newKids: number = parseInt(e.target.value)
        setKids(newKids)
    }

    return (
        <div>
            <h3>Calcule el costo de su pedido</h3>
            <FormControl>
                <RadioGroup
                    name="order"
                    row
                    value={orderType}
                    onChange={handleOrderType}
                >
                    <FormControlLabel value={OrderType.TEA} control={<Radio />} label="Merienda" />
                    <FormControlLabel value={OrderType.DINNER} control={<Radio />} label="Cena" />
                </RadioGroup>
                <TextField sx={{marginBottom: '10px'}} onChange={handleAdults} value={adults} label='Adultos' variant='standard' required/>
                <TextField sx={{marginBottom: '20px'}} onChange={handleKids} value={kids} label='Niños' variant='standard' required/>
                {total > 0 && (
                    <span>El costo es ${total.toFixed(2)}</span>
                )}
                <Button variant='contained' onClick={calculateOrder}>Calcular</Button>
            </FormControl>
        </div>
    )
}

export default CalculateOrder