import { Backdrop, Card, CardContent, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React, { FC, useState } from 'react'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import CalculateOrder from '../calculate-order/CalculateOrder'

const FloatingBox: FC = () => {
    const [calculateOrderOpened, setCalculateOrderOpened] = useState(false)
    const [dialOpened, setDialOpened] = useState(false)

    const handleDialClose = (reason: string) => {
        if (reason === 'toggle') {
            setDialOpened(false)
            setCalculateOrderOpened(false)
        }

        if (reason === 'mouseLeave' && !calculateOrderOpened)
            setDialOpened(false)
    }

    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
            open={dialOpened || calculateOrderOpened}
            onOpen={() => setDialOpened(true)}
            onClose={(e, reason) => handleDialClose(reason)}
        >
            <SpeedDialAction
                icon={<RestaurantMenuIcon/>}
                tooltipTitle='Calcular pedido'
                onClick={() => setCalculateOrderOpened(!calculateOrderOpened)}
            />
            {calculateOrderOpened && 
                <>
                    <Backdrop open/>
                    <Card sx={{position: 'absolute', bottom: 70, right: 70, width: 300}}>
                        <CardContent>
                            <CalculateOrder/>
                        </CardContent>
                    </Card>
                </>
            }
        </SpeedDial>
    )
}

export default FloatingBox