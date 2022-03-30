import React from 'react'
import Header from '../Components/HomePage/Header'
import { useTimer } from "react-timer-hook";

const Extra = () => {
    const time = new Date()
    const timeup = new Date("March 25, 2022 12:16:00");
    console.log(timeup);

    const expiryTimestamp = time.setSeconds(timeup)
    console.log(expiryTimestamp);
    const { seconds, minutes, hours, days, months, years } = useTimer({ expiryTimestamp })
    return (
        <div>
            <Header />
            <h1>Extra</h1>
            <span>
                Year {years} : Months {months} : Days {days} 
            </span>
            <span>
                Hours {hours} : Minutes {minutes} : Second {seconds}
            </span>
        </div>
    )
}

export default Extra