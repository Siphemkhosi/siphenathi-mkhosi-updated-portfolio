import classes from './LandingPage.module.css';
import React, { Component } from 'react';
import Siphenathi from '../../Assets/Images/Siphe.jpeg';
export default class Section2 extends Component {
  render() {
    return (
      <>
        <div className={classes.Section2}>
          <div className={classes.flexContainerSection2}>
            <div className={classes.siphenathiPic}>
              <img src={Siphenathi} alt="Siphenathi Mkhosi" />
            </div>
            <div className={classes.aboutsiphenathi}>
              <div className={classes.aboutHeadingText}>About</div>
              <div className={classes.divider}></div>

              <div className={classes.innerContainer}>

              <div className={classes.infoAboutsiphenathi}>
                <div className={classes.infoAboutsiphenathi1}>
                  My name is Siphenathi Mkhosi, as of 2023 I am doing my final year
                  in Chemical Science.
                  <br />
                  <br />
                  I am also a self learning web developer who constantly use every opportunity I get to upSkill in development. I have been focused on improving my skill through coding bootcsmps, online courses and doing various apps and websites to test my skill and implement all I have learnt , I am
                  looking for a job,learnership or internship of a web developer in order to get an opportunity to test and showcase my skills in the industry.
                  <br />
                  <br />
                 
                When I am not focusing on my studies you will find me designing simple apps and websites. I am also very athletic and play various sports such as rugby, soccer and tennis.

         If I should pick the
                  best website I have designed up to this point, it will be the Apple pockets app. I am
                  hard-working and believe you will give me a chance to showcase and improve my
                  skills.
                </div>
              </div>
              <div className={classes.myButton}>
                <button>Learn more</button>
              </div>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
