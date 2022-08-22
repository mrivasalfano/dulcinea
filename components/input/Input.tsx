import React, { FC } from 'react'

interface Props {
    title: string;
    type: string;
    value: string | number;
    setValue: Function;
}

const Input: FC<Props> = (props: Props) => {
  const {title, type, value, setValue} = props;

  return (
    <>
      <label style={{display: 'block', margin: '10px 0'}} htmlFor={title}>{title}</label>
      <input onChange={(e) => setValue(e.target.value)} value={value} type={type} id={title}/>
    </>
  )
}

export default Input