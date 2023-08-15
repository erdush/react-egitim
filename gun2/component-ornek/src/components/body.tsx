import { useState } from "react";
import MyButton from "./my-button";

const Body = () => {
  const [state, setState] = useState<boolean>(false);

  const toggleClick = () =>{
    setState(!state);
  }


  return (
    <div>
      {state ? <MyButton hasTextbox={false} /> : ''}
      <button onClick={toggleClick}>Toggle </button>
    </div>
  );
};

export default Body;
