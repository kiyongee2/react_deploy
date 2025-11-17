import { useState } from "react";

const Counter = (props) => {
  const [value, setValue] = useState(0);

  const doClick = () => {
    setValue(value + 1);
  }

  return(
    <div className="counter">
      <h1 className={props.color}>{props.title}</h1>
      <p className='clickable' onClick={doClick}>counter: {value}</p>
    </div>
  )
}

export default Counter;