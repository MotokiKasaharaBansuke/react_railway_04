import React, { useState } from "react";
import StyledButton from "./StyledButton";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const message = "Hello World!!!";
  const handleClick = () => {
    console.log("handleClick");
    setCount(count + 1);
  };

  return (
    <>
      <h1>{message}</h1>
      <p>カウンター: {count}</p>
      <StyledButton onClick={handleClick}>+1</StyledButton>
    </>
  );
};
export default App;
