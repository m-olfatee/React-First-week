import React from 'react';

import { movies } from './data';
import './movie.css'
import Movie from './Movie';



const Movies = movies.map(item => <Movie
    Title={item.title}
    Year={item.year}
    Director={item.director}
    Duration={item.duration}
    Rate={item.rate}
    genre={item.genre}
    key={item.title} />)
const MovieList = () => {
    return (
        <section className="movie">
            {Movies}

        </section>
    );
}
// title: 'The Shawshank Redemption',
//         year: '1994',
//         director: 'Frank Darabont',
//         duration: '2h 22min',
//         genre: ['Crime', 'Drama'],
//         rate: '9.3'
export default MovieList;
