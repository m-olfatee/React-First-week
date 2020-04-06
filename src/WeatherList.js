import React from 'react';
import './weather.css'
import Weather from './Weather';
import sun from './sun.png';
import mostlySun from './mostly-sunny.png';
import thunder from './thunder.png';
import cloudSun from './cloudy-with-sun.png';
import cloudy from './cloudy.png';



const WeatherDay = [
    { Image: sun, day: 'Mo', max: 15, min: 11 },
    { Image: mostlySun, day: 'Di', max: 22, min: 16 },
    { Image: cloudSun, day: 'Mi', max: 21, min: 12 },
    { Image: cloudy, day: 'Do', max: 13, min: 5 },
    { Image: thunder, day: 'Fr', max: 11, min: 6 },
    { Image: sun, day: 'Sa', max: 14, min: 8 },
    { Image: thunder, day: 'So', max: 5, min: 0 },
];
const weather = WeatherDay.map(item => <Weather Image={item.Image} day={item.day} max={item.max} min={item.min} key={item.day} />)
const WeatherList = () => {
    return (
        <section className="weather">
            {weather}

        </section>
    );
}

export default WeatherList;


// import React from 'react';
// import './weatherItem.css'

// const WeatherItem = (props) => {
//     return (
//         <div className="weather-item">
//             <h4>{props.day}</h4>
//             <img src={props.img} alt="" />
//             <p>{props.tempMax}°C <span>{props.tempMin}°C</span></p>
//         </div>
//     );
// }

// export default WeatherItem;
