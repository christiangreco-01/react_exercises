import React, { useEffect, useState } from "react";

function DigitalClock(){
    const[time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());// aggiorna l'orario ogni secondo
        },1000);

        // Cleanup: quando il componente viene smontato o l'effetto cambia
        return () => {
            clearInterval(intervalId); // ferma l'intervallo
        }
    }, []); // Esegui solo al primo montaggio (array vuoto) 

    function formatTime(){
        let hours = time.getHours();
        const minute = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours > 12? "PM":"AM";

        hours = hours % 12 || 12;

        return `${ addZero(hours)}:${addZero(minute)}:${ addZero(seconds)} ${addZero(meridian)}`
    }

    function addZero(number){
        return(number < 10? "0":"") + number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClock