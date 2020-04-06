import React, { Component } from 'react';
import './filmitem.css'
// const FilmItem = (props) => {
//     return (
//         <article>
//             <h1 className={props.isNew ? "redClass" : "greenClass"}>{props.filmName}</h1>
//         </article>
//     );
// }
class FilmItem extends Component {
    state = {}
    show() {
        console.log("it works")
    }
    render() {
        return (
            <article>
                <h1 className={this.props.isNew ? "redClass" : "greenClass"}>{this.props.filmName}</h1>
                <button onClick={this.show}>click</button>
            </article>);
    }
}

export default FilmItem;
