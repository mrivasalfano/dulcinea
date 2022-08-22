import { FC } from 'react'

interface Props {
    values: {id: number, value: string}[];
    name: string;
    setValue: Function;
    defaultValue: number;
}

const RadioButton: FC<Props> = (props: Props) => {
  const {values, name, setValue, defaultValue} = props;

  return (
    <>
        {values.map((obj, index) => (
            <div key={index} style={{display: 'inline-block'}}>
                <input onChange={() => setValue(obj.id)} type="radio" name={name} id={obj.value} checked={obj.id === defaultValue ? true : false}/>
                <label htmlFor={obj.value}>{obj.value}</label>
            </div>
        ))}
    </>
  )
}

export default RadioButton