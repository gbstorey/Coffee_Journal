import React from "react";
import Col from "react-bootstrap/Col";

const Note = (props) => {
  return (
    <Col md={6}>
      <div>
        <p>{props.title}</p>
      </div>
      <div>
        <p>{props.body}</p>
      </div>
    </Col>
  );
};

export default Note;
