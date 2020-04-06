import React from 'react';
import FilmItem from './FilmItem';
const filmArr = ["The Irishman", "The lighthouse", "1917", "Parasite"]
const FilmList = () => {
    return (
        <section>
            {/* <FilmItem filmName="The Irishman" isNew={true} />
            <FilmItem filmName="The lighthouse" />
            <FilmItem filmName="1917" />
            <FilmItem filmName="Parasite" /> */}
            {filmArr.map((film, i) => <FilmItem filmName={film} isNew={true} key={i} />)}
            {/* <article>
                <h1>The Irishman</h1>
            </article>
            <article>
                <h1>The Lighthouse</h1>
            </article>
            <article>
                <h1>1917</h1>
            </article>
            <article>
                <h1>Parasite</h1>
            </article> */}
        </section>
    );
}

export default FilmList;

// document.body.innerHTML = `
//     filml <br>
//     film2 <br>
//     film3 <br>
//     film4 <br>
// `

// function showFilm(str) {
//     document.body.innerHTML += str
// }
// document.body.innerHTML = `
//     ${showFilm("film1")} <br>
//     ${showFilm("film2")} <br>
//     ${showFilm("film3")} <br>
//     ${showFilm("film4")} <br>
// `