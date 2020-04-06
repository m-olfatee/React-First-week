import React, { Component } from 'react';
import { movies } from '../data';
import MovieItem from './MovieItem';
import './movielist.css';

class MovieList extends Component {
    state = {
        moviesState: movies,
    }

    handleSortAZ = () => {
        const sortedArray = this.state.moviesState.sort((a, b) => {
            let eltA = a.title.toUpperCase()
            let eltB = b.title.toUpperCase()
            if (eltA < eltB) {
                return -1
            } else if (eltA > eltB) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({ moviesState: sortedArray })

    }
    handleSortZA = () => {
        const sortedArray = this.state.moviesState.sort((a, b) => {
            let eltA = a.title.toUpperCase()
            let eltB = b.title.toUpperCase()
            if (eltA < eltB) {
                return 1
            } else if (eltA > eltB) {
                return -1
            } else {
                return 0
            }
        })
        this.setState({ moviesState: sortedArray })

    }
    handleSortYearA = () => {
        const sortedArray = this.state.moviesState.sort((a, b) => {
            let eltA = a.year
            let eltB = b.year
            if (eltA < eltB) {
                return -1
            } else if (eltA > eltB) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({ moviesState: sortedArray })

    }
    handleSortYearD = () => {
        const sortedArray = this.state.moviesState.sort((a, b) => {
            let eltA = a.year
            let eltB = b.year
            if (eltA < eltB) {
                return 1
            } else if (eltA > eltB) {
                return -1
            } else {
                return 0
            }
        })
        this.setState({ moviesState: sortedArray })

    }
    handleSortRate = () => {
        const sortedArray = this.state.moviesState.sort((a, b) => {
            let eltA = a.rate
            let eltB = b.rate
            if (eltA < eltB) {
                return 1
            } else if (eltA > eltB) {
                return -1
            } else {
                return 0
            }
        })
        this.setState({ moviesState: sortedArray })

    }

    render() {

        return (
            <section className="movie">
                <button onClick={this.handleSortAZ}>Sort A-Z</button>
                <button onClick={this.handleSortZA}>Sort Z-A</button>
                <button onClick={this.handleSortYearA}>Sort Year A</button>
                <button onClick={this.handleSortYearD}>Sort Year D</button>
                <button onClick={this.handleSortRate}>Sort Rate</button>

                {this.state.moviesState.map(elt => <MovieItem
                    title={elt.title}
                    key={elt.title}
                    year={elt.year}
                    director={elt.director}
                    duration={elt.duration}
                    rate={elt.rate}
                    genre={elt.genre}
                />)}

            </section>
        );
    }

}
export default MovieList;





// import React, { Component } from 'react';
// import MovieItem from './MovieItem';
// import './movieslist.css'
// import { movies } from '../dataMovies.js'

// class MoviesList extends Component {
//     state = {
//         movies: movies
//     }
//     sortAscending = () => {
//         const movies = this.state.movies.sort((elt1, elt2) => elt1.year - elt2.year)
//         this.setState({ movies });
//     }
//     sortDescending = () => {
//         const movies = this.state.movies.sort((elt1, elt2) => elt2.year - elt1.year)
//         this.setState({ movies });
//     }
//     sortByAtoZ = () => {

//         const movies = this.state.movies.sort((elt1, elt2) => {
//             const a = elt1.title.toUpperCase()
//             const b = elt2.title.toUpperCase()
//             if (a > b) {
//                 return 1
//             } else if (a < b) {
//                 return -1
//             } else {
//                 return 0
//             }
//         })
//         //this.setState({ movies: movies });
//         this.setState({ movies });
//     }
//     sortByZtoA = () => {

//         const movies = this.state.movies.sort((elt1, elt2) => {
//             const a = elt1.title.toUpperCase()
//             const b = elt2.title.toUpperCase()
//             if (a > b) {
//                 return -1
//             } else if (a < b) {
//                 return 1
//             } else {
//                 return 0
//             }
//         })
//         this.setState({ movies });
//     }
//     sortByRate = () => {
//         const movies = this.state.movies.sort((elt1, elt2) => elt2.rate - elt1.rate)
//         this.setState({ movies });
//     }
//     sortByAction = () => {
//         const movies = this.state.movies.filter(movie => {
//             // return movie.genre.indexOf("Action") !== -1
               // return movie.genre.includes("Action")
//         })
//         this.setState({ movies });
//     }
//     render() {
//         const moviesList = this.state.movies.map((movie, i) => {
//             return <MovieItem movie={movie} key={i} />
//         })
//         return (
//             <main>
//                 <div className="button">
//                     <button onClick={this.sortAscending}>Sort by Date Ascending</button>
//                     <button onClick={this.sortDescending}>Sort by Date Descending</button>
//                     <button onClick={this.sortByAtoZ}>Sort By A-Z</button>
//                     <button onClick={this.sortByZtoA}>Sort By Z-A</button>
//                     <button onClick={this.sortByRate}>Sort By Rate</button>
//                     <button onClick={this.sortByAction}>Action</button>
//                 </div>
//                 <section>

//                     {moviesList}
//                 </section>
//             </main>
//         );
//     }
// }

// export default MoviesList;