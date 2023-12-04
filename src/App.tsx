import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import TestButton from "./components/TestButton";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleButtonPress = (text: string) => {
    console.log(text);
    setAlertVisibility(true);
  };

  const handleDismissAlert = () => {
    setAlertVisibility(false);
  };
  return (
    <div>
      {alertVisible && <Alert onClose={handleDismissAlert}>My Alert</Alert>}
      <TestButton text="Press Me" onButtonPressed={handleButtonPress} />
    </div>
  );
}

export default App;
