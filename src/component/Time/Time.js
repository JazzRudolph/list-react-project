import React from "react";

export default function Time() {
    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();

    



    return(
        <div className="Time">
            <p>{time}</p>
        </div>
    )
}