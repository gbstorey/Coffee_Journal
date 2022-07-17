import './App.css';
import NavbarBS from "./Components/Navigation/Navbar";
import FlavorWheel from "./Components/FlavorWheel";
import CoffeeImage from './Components/Coffees/CoffeeImage';

function App() {
  return (
    <div className="App">
    <NavbarBS />
    <FlavorWheel />
    <CoffeeImage />
    </div>
  );
}

export default App;
