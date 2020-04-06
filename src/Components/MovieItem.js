import React from 'react';

const MovieItem = (props) => {
    return (
        <article className="article">
            <h3>{props.title}</h3>
            <h4>{props.year}</h4>
            <h4>{props.director}</h4>
            <h4>{props.duration}</h4>
            <h4>{props.rate}</h4>
            <h4>{props.genre}</h4>

        </article>
    );
}
export default MovieItem;







// import React from 'react';
// import './movieitem.css'
// const MovieItem = (props) => {
//     return (
//         <article>
//             <h3>{props.movie.title}</h3>
//             <h3>{props.movie.year}</h3>
//             <h3>{props.movie.director}</h3>
//             <h3>{props.movie.duration}</h3>
//             <h3>{props.movie.rate}</h3>
//             <ul>
//                 {props.movie.genre.map((genre, i) => {
//                     return <li key={i}>{genre}</li>
//                 })}
//             </ul>
//         </article>
//     );
// }

// export default MovieItem;