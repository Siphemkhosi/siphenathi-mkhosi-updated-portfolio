import React from 'react'
import classes from './Card.module.css'
import { Link } from 'react-router-dom'
export const Card = (props) => {

    const {image, name, typeOfApp, details, path }  =  props.info

  return (
    <div className={classes.card}>
              <img src={image} alt="cinema app"  id={classes.image}/>
              <div className={classes.innerContainer}>

                <div>
                <div className={classes.projectName}>{name}</div>
                <div className={classes.typeOfProject}>
                  {typeOfApp}
                </div>
                </div>
                
                <div className={classes.moreAboutProject}>
                  {details}
                </div>
                <div className={classes.myButton1}>
                  <a className={classes.myButton1} target="_blank"  href={path}  >VIEW PROJECT</a>
                </div>
              </div>
            </div>
  )
}
