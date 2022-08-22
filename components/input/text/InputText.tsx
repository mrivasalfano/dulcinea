import React, { FC } from 'react'
import Input from '../Input';

interface Props {
    title: string;
    value: string | number;
    setValue: Function;
}

const InputText: FC<Props> = (props: Props) => {
  const {title, value, setValue} = props;

  return (
    <Input title={title} setValue={setValue} value={value} type="text"/>
  )
}

export default InputText