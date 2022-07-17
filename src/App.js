import "./App.css";
import NavbarBS from "./Components/Navigation/Navbar";
import FlavorChart from "./Components/FlavorChart";
import CoffeeImage from "./Components/Coffees/CoffeeImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {
  return (
    <div className="App">
      <NavbarBS />
      <Container>
        <Row>
          <Col>
            <CoffeeImage />
          </Col>
          <Col xs={12} md={6}  className="chart">
            <FlavorChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
