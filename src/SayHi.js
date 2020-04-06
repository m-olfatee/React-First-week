import React from 'react';
const date = new Date()
let hours = date.getHours();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let timeOfDay;
var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
if (hours < 12) {
    timeOfDay = "Good morning"
} else {
    timeOfDay = "Good afternoon"
}
const styleH1 = {
    color: '#464820',
    letterSpacing: 3,
    fontSize: "40px"
}
const styleH3 = {
    color: 'blue',
    fontSize: "30px",
}
const styleH4 = {
    color: 'green',
    fontSize: "20px"
}

const SayHi = () => {
    return (
        <div>
            <h1 style={styleH1}>SayHi</h1>
            <h2 style={{ color: "red", fontSize: 50 }}>{timeOfDay}</h2>
            <h3 style={styleH3}> Today is {weekday[day]}</h3>
            <h4 style={styleH4}>This month is : {mL[month]}</h4>
            <h4 style={styleH4}>This year is : {year}</h4>

        </div >
    );
}

export default SayHi;