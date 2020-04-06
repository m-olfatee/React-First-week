import React from 'react';

const Movie = (props) => {
    return (
        <article className="article">
            <h3>{props.Title}</h3>
            <h4>{props.Year}</h4>
            <h4>{props.Director}</h4>
            <h4>{props.Duration}</h4>
            <h4>{props.Rate}</h4>
            <h4>{props.genre}</h4>

        </article>
    );
}
export default Movie;
