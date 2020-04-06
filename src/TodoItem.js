import React from 'react';

const TodoItem = (props) => {
    return (
        <article className="article">

            <h4><span>{props.id}</span>: {props.todo}</h4>
            <div className={props.completed}>

            </div>

        </article>
    );
}
export default TodoItem;


// import React from 'react';

// const TodoItem = (props) => {
//     // console.log(props)
//     return (
//         <article>
//             <input
//                 type="checkbox"
//                 name="" id=""
//                 checked={props.completed}
//                 onChange={props.handleChange} />
//             <label htmlFor="">{props.todo}</label>
//         </article>
//         //immutable
//     );
// }

// export default TodoItem;