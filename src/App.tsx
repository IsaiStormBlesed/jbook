import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const handleClick = () => {
    console.log(input);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <pre></pre>
    </div>
  );
}
