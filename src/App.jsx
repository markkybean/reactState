import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import ShoppingList from "./ShoppingList";
import Clicker from "./Clicker";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "chiken breasts", quantity: 4, completed: false },
  { id: 4, item: "carrots", quantity: 6, completed: true },
];

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {
  return (
    <div>
      <h1></h1>
      {/* <ShoppingList items={data} /> */}
      <ColorBoxGrid colors={colors} />
    </div>
  );
}

export default App;
