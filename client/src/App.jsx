import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MyLayout from "./components/layout/MyLayout";
import MyHeader from "./components/header/MyHeader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MyHeader />
    </div>
  );
}

export default App;
