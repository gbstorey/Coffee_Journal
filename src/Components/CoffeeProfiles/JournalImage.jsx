import React from 'react';
import classes from "./JournalImage.module.css"

const JournalImage = (props) => {
 return <img className={classes.img}alt="journal" src={props.imageLink}/>
}

export default JournalImage;
