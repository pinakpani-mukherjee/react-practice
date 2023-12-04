import "./App.css";
import Alert from "./components/Alert";
import TestButton from "./components/TestButton";

function App() {
  const handleButtonPress = (text: string) => {
    console.log(text);
  };
  return (
    <div>
      <Alert>
        <span>Hello World</span>
      </Alert>
      <TestButton text="Press Me" onButtonPressed={handleButtonPress} />
    </div>
  );
}

export default App;
