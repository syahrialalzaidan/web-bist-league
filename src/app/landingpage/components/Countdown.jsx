import React, { useEffect, useState, useRef } from 'react'
import Semicolon from "./Semicolon.jsx"
import css from "./landing.module.css"

const Countdown = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdonwDate = new Date('August 14, 2023 00:00:00');

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdonwDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop timer
                clearInterval(interval.current);
            }
            else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    }, [])

    return (
        <div className={`${css.countdownSection}`}>
            <div className={`${css.countdownBox}`}>
                <h1 className={`${css.timeValue}`}>{(timerDays < 10) && (timerDays !== '00') ? `0${timerDays}` : timerDays}</h1>
                <p className={`${css.unitOfTime}`}>Days</p>
                <p className={`${css.unitOfTimeMobile}`}>Days</p>
            </div>
            <Semicolon />
            <div className={`${css.countdownBox}`}>
                <h1 className={`${css.timeValue}`}>{(timerHours < 10) && (timerHours !== '00') ? `0${timerHours}` : timerHours}</h1>
                <p className={`${css.unitOfTime}`}>Hours</p>
                <p className={`${css.unitOfTimeMobile}`}>Hours</p>
            </div>
            <Semicolon />
            <div className={`${css.countdownBox}`}>
                <h1 className={`${css.timeValue}`}>{(timerMinutes < 10) && (timerMinutes !== '00') ? `0${timerMinutes}` : timerMinutes}</h1>
                <p className={`${css.unitOfTime}`}>Minutes</p>
                <p className={`${css.unitOfTimeMobile}`}>Mins</p>
            </div>
            <Semicolon />
            <div className={`${css.countdownBox}`}>
                <h1 className={`${css.timeValue}`}>{(timerSeconds < 10) && (timerSeconds !== '00') ? `0${timerSeconds}` : timerSeconds}</h1>
                <p className={`${css.unitOfTime}`}>Seconds</p>
                <p className={`${css.unitOfTimeMobile}`}>Secs</p>
            </div>
        </div>
    )
}

export default Countdown