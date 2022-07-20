import React from "react";
import Col from "react-bootstrap/Col";

const Note = (props) => {
  return (
    <Col>
      <div><p>
      {props.text}
      </p></div>
    </Col>
  );
};

export default Note;
