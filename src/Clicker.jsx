import { useState } from "react";

export default function Clicker() {
  const [num, setNum] = useState(0);
  const handleClick = () => {setNum(num + 1);}
    
  

  return (
    <div>
      <p>Click{num}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
