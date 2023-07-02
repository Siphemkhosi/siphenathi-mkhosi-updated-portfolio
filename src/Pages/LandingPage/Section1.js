import React, { Component} from 'react';
import classes from './LandingPage.module.css';
import backgroundImage from '../../Assets/Images/bgpic_2.jpg';


export default class Section1 extends Component {
  render() {
    return (
      <>
        <div className={classes.flexContainer}>
          <div className={classes.backgroundContainer}>
            <img
              src={backgroundImage}
              alt="SIPHENATHI MKHOSI"
              className={classes.myBackgroundImage}
              style={{
                opacity:.8
              }}
            />
          </div>
            <div className={classes.flexItem1}>
            <div className={classes.myName}>SIPHENATHI MKHOSI</div>
            <div className={classes.softText}>Web developer</div>
          </div>
        </div>
      </>
    );
  }
}
