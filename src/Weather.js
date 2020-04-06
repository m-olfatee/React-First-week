import React from 'react';

const Weather = (props) => {
    return (
        <article>
            <p>{props.day}</p>
            <img src={props.Image} alt="" />

            <h2>{props.max}	&#8451;   <span className="min">{props.min}	&#8451;</span></h2>

        </article>
    );
}

export default Weather;

// import React from 'react';
// import WeatherItem from './WeatherItem'
// import data from './data'



// const Weather = () => {
//     const allItems = data.map((element, i) => <WeatherItem key={i}
//         day={element.day}
//         img={element.img}
//         tempMin={element.tempMin}
//         tempMax={element.tempMax}
//     />)
//     return (
//         <div className="weather">
//             {allItems}
//         </div>);
// }

// export default Weather;