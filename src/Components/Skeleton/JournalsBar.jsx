import React from "react";
import classes from "./JournalsBar.module.css";
import JournalImage from "../CoffeeProfiles/JournalImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "../Icons/Icon";

const JournalsBar = (props) => {
  const coffeeList = props.coffees;
  return (
    <div className={classes.cardArea}>
      {coffeeList.map((item) => {
        return <Container className={classes.cardLight} key={item._id}>
          <Row>
            <Col className={classes.column} xs={4}>

              <JournalImage imageLink={item.imageLink}/>

            </Col>

            <Col className={classes.column} xs={8}>
              <div className={classes.textArea}>
              <h1 className={classes.journalTitle}>{item.location}</h1>
              <h2 className={classes.journalDescription}>
                {item.description}
              </h2>
              <Container className={classes.cardDark}>
                <Icon />

                <p className={classes.journalDate}>{item.lastTried}</p>

              </Container>
              </div>
            </Col>

          </Row>
        </Container>;
      })}
    </div>
  );
};

export default JournalsBar;
