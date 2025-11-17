import { useEffect, useState } from "react";

const UseEffect = (props) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  
  const doClick = () => {
    setCount(count + 1);
  }

  const doChange = (e) => {
    setText(e.target.value);
  }

  //useEffect(함수, [스테이트])
  //마운트(첫실행) 될때 변경(업데이트) 될때 작동함
  useEffect(() => {
    console.log("Rendering");
  }, [count]) //빈배열[], [count] count 될때만 랜더링

  return(
    <div>
      <h2>{props.title}</h2>
      <button onClick={doClick}>Update</button>
      <span>{count}</span>
      <br />
      <input 
        type="text"
        placeholder="Input Text"
        value={text}
        onChange={doChange}
      />
      <span>{text}</span>
    </div>
  )
}

export default UseEffect;