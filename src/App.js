import "./App.css";
import React, { useState } from "react";
import NavbarBS from "./Components/Navigation/Navbar";
import FlavorChart from "./Components/FlavorChart";
import CoffeeImage from "./Components/Coffees/CoffeeImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JournalForm from "./Components/Forms/JournalForm";
import Note from "./Components/Coffees/Note";

const stats = [
  { label: "acidity", value: 2 },
  { label: "body", value: 3 },
  { label: "smooth", value: 3 },
  { label: "sweet", value: 3 },
];

function App() {
  const [notes, setNotes] = useState([]);
  const saveNote = (noteText) => {
    // setNotes((prevNotes) => {
    //   return [noteText, ...notes];
    // });
    setNotes(sample);
  };

  const sample = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <div className="App">
      <NavbarBS />
      <Container>
        <Row>
          <Col md={6}>
            <CoffeeImage />
          </Col>
          <Col md={6}>
            <FlavorChart stats={stats} />
            <JournalForm />
          </Col>
        </Row>
        <Row>
          {/* {notes.map((note, index) => {
            return <Note
            key={index}
            text={note}
            >

            </Note>
          })} */}
          {/* <Note text={sample}></Note> */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
