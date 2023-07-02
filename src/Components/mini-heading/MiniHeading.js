import React from 'react'
import classes from './MiniHeading.module.css'

export const MiniHeading = (props) => {
  return (
    <div className={classes.MiniHeading}>
        {props.heading}
    </div>
  )
}
