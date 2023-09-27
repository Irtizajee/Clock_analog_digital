import clock from './clock.jpg';
import './index.css';
import { useState, useEffect } from 'react';
// import wood_background from './wood_background.jpg'
import clock_png from './clock_png.png'

function Clock() {

    let date = new Date();

    let Second = date.getSeconds();
    let Minute = date.getMinutes();
    let Hour = date.getHours();

    var setSecond = 6 * Second;
    var setMinute = 6 * Minute;
    var setHours = 30 * Hour;

    var cal_hours = Minute / 2;

    // cal_hours will add in setHours !


    let [second_hand, setSecond_hand] = useState(undefined);
    let [minute_hand, setMinute_hand] = useState(undefined);
    let [hour_hand, setHour_hand] = useState(undefined);

    useEffect(
        () => {

            setTimeout(
                () => {
                    setSecond_hand(
                        {
                            transform: `rotate(${setSecond}deg)`
                        }
                    )

                    setMinute_hand(
                        {
                            transform: `rotate(${setMinute}deg)`
                        }
                    )

                    // we have to do some complex calculation for hours hand!
                    // clock is almost ready
                    setHour_hand(
                        {
                            transform: `rotate(${setHours + cal_hours}deg)`
                        }
                    )
                }

            )

        }
    )








    const d_get_time = new Date();
    const d_hours = d_get_time.getHours()
    const d_minutes = d_get_time.getMinutes()
    const d_seconds = d_get_time.getSeconds()

    const d_date = d_get_time.getDate();
    const d_day = d_get_time.getDay();
    const d_year = d_get_time.getFullYear();
    // console.log(d_date)
    // console.log(d_get_time.getMinutes())

    let day = "";
    switch(d_day)
    {
        case 0:
            day = "sunday";
            break;
        case 1:
            day = "monday";
            break;
        case 2:
            day = "tuesday";
            break;
        case 3:
            day = "wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
          
    }

    return (
        <>

            {/* <div>
                <h1> seconds {Second}</h1>
                <h1> minutes {Minute}</h1>
                <h1> Hours {Hour}</h1>
                <h1> "Hours * 30" : {setHours}</h1>
                <h1> calculation for hours {setHours + cal_hours}  </h1>
            </div> */}

            <div className='clock_body'>



                <div className="services_clock_img">

                    <div className="clock_background">
                        <img width={"100%"} height={"400px"} src={clock_png} alt="" />
                        <div style={second_hand} className="hands" id="seconds_hand"></div>
                        <div style={minute_hand} className="hands" id="minutes_hand"></div>
                        <div style={hour_hand} className="hands" id="hours_hand"></div>
                    </div>

                </div>

                <div className='digital_clock'>
                    <div className='digital_clock_child'>
                        <div>{d_hours}</div>
                        <div>:</div>
                        <div>{d_minutes}</div>
                        <div>:</div>
                        <div>{d_seconds}</div>
                    </div>

                    <div className='calander'>
                    <div>{d_date}</div>
                        <div>:</div>
                        <div>{day}</div>
                        <div>:</div>
                        <div>{d_year}</div>
                    </div>
                </div>


            </div>
        </>

    );



};
export default Clock;