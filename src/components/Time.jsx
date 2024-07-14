import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const now = new Date().toLocaleTimeString();

function Time() {

    setInterval(changeTime,1000);
    
    const [time, setTime] = React.useState(now);

    function changeTime() {
        setTime(new Date().toLocaleTimeString());
    }

    return (
        <div className="time">
            <AccessTimeIcon /> <p>{time}</p>
        </div>
    );
}

export default Time;
