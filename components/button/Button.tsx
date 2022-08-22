import React, { FC } from 'react'

interface Props {
    text: string;
    onClickCallback: Function;
}

const Button: FC<Props> = (props: Props) => {
  const {text, onClickCallback} = props;

  return (
    <button onClick={() => onClickCallback()}>{text}</button>
  )
}

export default Button