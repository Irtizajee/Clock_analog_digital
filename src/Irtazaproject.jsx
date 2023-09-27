import './index.css';
import clock from './clock.jpg';
import { useState , useEffect } from 'react';
function Irtazaproject(){

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

   var set_seconds = 6 * seconds;
   var set_minutes = 6 * minutes;
//    there is a complex caqlculation for hours hand!
//  i want hours hand rotate according tothe minutes hands


   var set_hours = 30 * hours;

   var [hours_rotate_with_minute , setHours_rotate_with_minute] = useState(undefined);

    let [second_hand , setSecond_hand] = useState(undefined);
    let [minute_hand , setMinute_hand] = useState(undefined);
    let [hour_hand , setHour_hand] = useState(undefined);

   useEffect(
    ()=>{
        setTimeout(
            ()=>{
                setSecond_hand({
                    transform : `rotate(${set_seconds}deg)`
                })

                setMinute_hand(
                    {
                    transform : `rotate(${set_minutes}deg)`
                    }
                )

                setHours_rotate_with_minute(minutes / 2);
                var sumHours = hours_rotate_with_minute + set_hours;
                //  console.log(sumHours);
                console.log( set_hours);
                setHour_hand(
                    {
                        transform : `rotate(${sumHours}deg)`
                    }
                )
            }
            , 1000
        )
    }
   )


     

    return(
        <>
 <div className="services_clock_img">

<div className="clock_background">
    <img width={"400px"} height={"400px"} src={clock} alt="" />
    <div style={second_hand} className="hands" id="seconds_hand"></div>
    <div style={minute_hand} className="hands" id="minutes_hand"></div>
    <div style={hour_hand} className="hands" id="hours_hand"></div>
</div>

</div>
        </>
    );
};
export default Irtazaproject;