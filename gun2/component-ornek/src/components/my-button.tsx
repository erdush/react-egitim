import { useState } from "react";

const MyButton = (props) => {
  const [counter, setCounter] = useState(0);
  console.log(props);

  const btn_Click = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <div>
      Sayı değeri : {counter}
      <br/>
      {props.hasTextbox && <input type="text"/>}

      <hr />
      <button onClick={btn_Click}>Tıkla</button>
      <hr />
    </div>
  );
};

export default MyButton;
