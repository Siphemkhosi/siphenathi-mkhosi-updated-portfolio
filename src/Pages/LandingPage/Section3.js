
import classes from "./LandingPage.module.css";
import {Card} from '../../Components/card/Card.js'
import apples from '../../Assets/Images/apples.png'
import gbv from '../../Assets/Images/gbv.png'
import taxi from '../../Assets/Images/taxi.png'
import calculator from '../../Assets/Images/calculator.png'
import phone_bill from '../../Assets/Images/phone_bill.png'
import dog from '../../Assets/Images/dog.png'
import greet from '../../Assets/Images/greet.png'
import robots from '../../Assets/Images/robots.png'
import webpage from '../../Assets/Images/webpage.png'
import backendGreet from '../../Assets/Images/backendGreet.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MiniHeading } from "../../Components/mini-heading/MiniHeading";


export const Section3 = () => {
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      
    }

  return (
         <div className={classes.Section3}>
           <div className={classes.aboutHeadingText}> portfolio</div>
           
           <MiniHeading heading={"FRONTEND PROJECTS"} />
            <Carousel responsive={responsive}
            className={classes.carousel}
            infinite={true}
            autoPlaySpeed={1000}
            transitionDuration={500}
             >
              <div>
              <Card  info={{name:"girl-code-challenge", path:"https:siphemkhosi.github.io/girlcode-challenge/", details:"This emergency app was designed for woman who would find themselves in dangerous situations. The idea was for the app to be able to send the woman's current location to different helplines when the emergency button has been pressed. The app also has an option for emergency calls, video recording and recording options.", image:gbv, typeOfApp:"web application"}} />
              </div>
            <div>
            <Card  info={{name:"odin-landingPage", path:"https:siphemkhosi.github.io/odin-landingPage/", details:"This site was to help me learn how to build landing pages , use different properties of CSS and Html.", image:dog, typeOfApp:"web application"}} />            
            </div>

            <div>
            <Card  info={{name:"Greeting-App", path:"https://siphemkhosi.github.io/Greeting-App/", details:"This app has helped me to understand DOM and it's elements. In this app a user can greet different people using three languages", image:greet, typeOfApp:"web application"}} />
            </div>

            <div>
            <Card  info={{name:"taxi-queue-app", path:"https://siphemkhosi.github.io/taxi-queue-app/", details:"On the app, when the button depart is clicked then taxi depart with certain number of people, otherwise the taxi does not depart.Every time a taxi departs the number of people decreases by the quantity of which a taxi can accommodate.", image:taxi, typeOfApp:"web application"}} />
            </div>

            <div>
           <Card  info={{name:"Traffic-Light-App", path:"https://siphemkhosi.github.io/Traffic-Ligth-App/", details:"This simple fun project is made to demonstrate and teach how traffic lights work", image:robots, typeOfApp:"web application"}} />
            </div>

            <div>
            <Card  info={{name:"Apple-Pockets", path:"https://siphemkhosi.github.io/Apple-Pockets/", details:"This interesting app is designed to help a user who runs an apple business calculate the prices of packets and apples they should sell by when they want to get a certain profit.", image:apples, typeOfApp:"web application"}} />
            </div>

            <div>
           <Card  info={{name:"countingForms", path:"https://siphemkhosi.github.io/countingForms/", details:" This app works as a small calculator, a user can use it to calculate and using one operator per calculation.", image:calculator, typeOfApp:"web application"}} />
            </div>
             
             <div>
           <Card  info={{name:"SipheMkhosi-webpage", path:"https:siphemkhosi.github.io/SipheMkhosi-webpage/", details:"This webpage was a fun exercise to build my first webpage", image:webpage, typeOfApp:"web application"}}/>
             </div>
         </Carousel>
         <div className={classes.divider}></div>
         <MiniHeading heading={"BACKEND PROJECTS"} />
          <Carousel
          responsive={responsive}
          className={classes.carousel}
          >
            <div>
            <Card  info={{name:"back-end_greet", path:"https://github.com/Siphemkhosi/back-end_greet.git", details:"This was a fun but challenging backend app. This app allows a users to greet a name, the name can be greeted in on of three languages. When a name is greeted for the first time the counter increases and greeted names are stored on the greeted names page. The app also stores how many times each name has been greeted on the times page. The reset button resets all the greeted names and the counter.", image:backendGreet, typeOfApp:"web application"}} />
            </div>

            <div>
            <Card  info={{name:"SettingsBIll App", path:"https://siphemkhosi.github.io/dom-intro/", details:"This app calculates the total phone bill based on the number of phone calls and sms", image:phone_bill, typeOfApp:"web application"}} />
            </div>
          </Carousel>

         </div>
    
    
  )
}

