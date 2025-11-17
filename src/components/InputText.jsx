import { useState } from "react";

const InputText = (props) => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("이름은?");
  
  const doInput = (event) => {
    setInput(event.target.value);
  }

  const doClick = () => {
    setMessage(`안녕하세요, ${input}님!`)
  }

  return(
    <div>
      <h2 className={props.color}>{props.title}</h2>
      <p>{message}</p>
      <div>
        <input type="text" onChange={doInput} />
        <button onClick={doClick}>Click</button>
      </div>
    </div>
  );
}

export default InputText;