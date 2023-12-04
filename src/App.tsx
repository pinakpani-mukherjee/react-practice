import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let items: string[] = ["NYC", "San Fransisco", "Tokyo", "London", "Mumbai"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
