import "./App.css";
import React, { useState, useEffect } from "react";
import NavbarBS from "./Components/Navigation/Navbar";
import JournalsBar from "./Components/Skeleton/JournalsBar";
// import FlavorChart from "./Components/FlavorChart";
// import CoffeeImage from "./Components/Coffees/CoffeeImage";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import JournalForm from "./Components/Forms/JournalForm";
// import Note from "./Components/Coffees/Note";
import Axios from 'axios';

function App() {
// const [error, setError] = useState(null);
// const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3031/notes')
    .then(function (response) {
      setItems(response.data.data);
    })
  } , []);

  console.log(items);

    return (
      <div className="App">
        <NavbarBS />
        <JournalsBar coffees={items}/>
      </div>
    );
  }
export default App;










        // eslint-disable-next-line no-lone-blocks
        {/* <Container>
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
          {items.map((note) => {
              return <Note
              key={note._id}
              title={note.title}
              body={note.body}
              >
              </Note>
            })}
          </Row>
        </Container> */}