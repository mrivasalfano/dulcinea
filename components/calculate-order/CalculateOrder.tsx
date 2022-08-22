import { FC, useState } from 'react'
import Button from '../button/Button'
import RadioButton from '../button/radio/RadioButton'
import InputText from '../input/text/InputText'

const CalculateOrder: FC = () => {
    const [total, setTotal] = useState(0);
    const [adults, setAdults] = useState(0);
    const [kids, setKids] = useState(0);
    const [orderTypeId, setOrderTypeId] = useState(1);

    const calculateOrder = () => {
        let total = 0;

        if (orderTypeId === 1)
            total = (adults * 7) + (kids * 4);
        else if (orderTypeId === 2)
            total = (adults * 11) + (kids * 7);

        setTotal(total);
    }

    const orderTypes = [
        {id: 1, value: 'Merienda'}, 
        {id: 2, value: 'Cena'}
    ];

    return (
        <div>
            <h3>Calcule el costo de su pedido</h3>
            <RadioButton name='order' values={orderTypes} setValue={setOrderTypeId} defaultValue={orderTypeId}/>
            <div>
                <InputText title='Adultos' value={adults} setValue={setAdults} />
                <InputText title='Niños' value={kids} setValue={setKids} />
            </div>
            {total > 0 && (
                <span>El costo es ${total.toFixed(2)}</span>
            )}
            <Button text="Calcular" onClickCallback={calculateOrder} />
        </div>
    )
}

export default CalculateOrder