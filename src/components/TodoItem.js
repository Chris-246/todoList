import React from 'react';

const TodoItem = (props) => {
    console.log(props);
    return (
        <li
            onClick={props.onClick}
            style={{
                textDecoration: props.isCompleted ? 'line-through' : 'none'
              }}
        >
            {props.text}
        </li>
    )
}

export default TodoItem;