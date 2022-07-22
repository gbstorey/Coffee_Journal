import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import classes from "./Icon.module.css"

const Icon = (props) => {
 return <FontAwesomeIcon icon={faMugHot} className={classes.icon}/>
}

export default Icon

