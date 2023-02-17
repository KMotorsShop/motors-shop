import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { CardFooter, Button, IconButton } from "@chakra-ui/react";

import { Footer } from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
