import React from 'react';

const SuperHero = (props) => {
    console.log(props.urlImage)
    return (
        <article>
            <img src={props.urlImage} alt="" />
            <p>{props.id}</p>
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
        </article>
    );
}

export default SuperHero;

