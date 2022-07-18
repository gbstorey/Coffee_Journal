import "./App.css";
import NavbarBS from "./Components/Navigation/Navbar";
import FlavorChart from "./Components/FlavorChart";
import CoffeeImage from "./Components/Coffees/CoffeeImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const stats = [
  { label: "acidity", value: 2 },
  { label: "body", value: 3 },
  { label: "smooth", value: 3 },
  { label: "sweet", value: 3 },
];

function App() {
  return (
    <div className="App">
      <NavbarBS />
      <Container>
        <Row>
          <Col>
            <CoffeeImage />
            <FlavorChart stats={stats} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
