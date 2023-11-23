import React, { useState } from 'react'

export interface data {
    img: string,
    text: string
}

export interface selectedData {
    img: string,
    text: string,
    amount?: number
}

export interface SelectorProps {
    onOkay?: () => selectedData,
    onCancel?: () => void,
    data: data[],
};

const Selector: React.FunctionComponent<SelectorProps> = (props) => {
  const { onOkay, onCancel, data } = props

  const [amount, setAmount] = useState<number>(0)
  const [selected,setSelected] = useState<boolean>(false)
  const [term,setTerm] = useState<string>("") // TODO: need condition so that if the term is empty it wikll not show all the data
  

  return (
    <div>Selector</div>
  )
}

export default Selector