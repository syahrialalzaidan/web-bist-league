import React from 'react'
import classes from './Header.module.css'

const Button = (props) => {
    return (
        <button className={`${classes.button} ${props.active}`} onClick={props.onClick}>{props.name}</button>
    )
}

export default Button