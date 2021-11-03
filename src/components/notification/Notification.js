import React from "react";
import s from'./notification.module.css'
function Notification({message}) {
    console.log(message);

    return(
        <p className={s.notification}>{message}</p>
    )
}

export default Notification