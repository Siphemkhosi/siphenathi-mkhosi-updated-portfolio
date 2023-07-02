
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
              <Card  info={{name:"girl-code-challenge", path:"https:siphemkhosi.github.io/girlcode-challenge/", details:"info about info", image:gbv, typeOfApp:"web application"}} />
              </div>
            <div>
            <Card  info={{name:"odin-landingPage", path:"https:siphemkhosi.github.io/odin-landingPage/", details:"info about info", image:dog, typeOfApp:"web application"}} />            
            </div>

            <div>
            <Card  info={{name:"Greeting-App", path:"https://siphemkhosi.github.io/Greeting-App/", details:"info about info", image:greet, typeOfApp:"web application"}} />
            </div>

            <div>
            <Card  info={{name:"taxi-queue-app", path:"https://siphemkhosi.github.io/taxi-queue-app/", details:"info about info", image:taxi, typeOfApp:"web application"}} />
            </div>

            <div>
           <Card  info={{name:"Traffic-Light-App", path:"https://siphemkhosi.github.io/Traffic-Ligth-App/", details:"info about info", image:robots, typeOfApp:"web application"}} />
            </div>

            <div>
            <Card  info={{name:"Apple-Pockets", path:"https://siphemkhosi.github.io/Apple-Pockets/", details:"info about info", image:apples, typeOfApp:"web application"}} />
            </div>

            <div>
           <Card  info={{name:"countingForms", path:"https://siphemkhosi.github.io/countingForms/", details:"info about info", image:calculator, typeOfApp:"web application"}} />
            </div>
             
             <div>
           <Card  info={{name:"SipheMkhosi-webpage", path:"https:siphemkhosi.github.io/SipheMkhosi-webpage/", details:"info about info", image:webpage, typeOfApp:"web application"}}/>
             </div>

             {/* <div>
            <Card  info={{name:"test8", path:"", details:"info about info", image:musicPlayer, typeOfApp:"react application"}} /> 
             </div> */}
         </Carousel>
         <div className={classes.divider}></div>
         <MiniHeading heading={"BACKEND PROJECTS"} />
          <Carousel
          responsive={responsive}
          className={classes.carousel}
          
          >
            <div>
            <Card  info={{name:"back-end_greet", path:"https://github.com/Siphemkhosi/back-end_greet.git", details:"info about info", image:backendGreet, typeOfApp:"web application"}} />
            </div>

            <div>
            <Card  info={{name:"SettingsBIll App", path:"https://siphemkhosi.github.io/dom-intro/", details:"info about info", image:phone_bill, typeOfApp:"web application"}} />
            </div>
          </Carousel>

         </div>
    
    
  )
}

