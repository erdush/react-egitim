import  { MouseEvent, useState } from "react";

const Bidi = () => {
  const [counter, setCounter] = useState<number>(0);
 
  const btnClick = (ev:MouseEvent) =>{
    console.log(ev);
    setCounter(counter + 1);
  }

  return (
    <>
      <hr />
      Counter değeri = {counter}
      <button onClick={btnClick}>Click</button>
      <hr />
    </>
  );
};

export default Bidi;