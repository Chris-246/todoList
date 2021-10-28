import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {

    return (
        <ul>
            {props.todos.map(todo => {
                console.log(todo.id);
                return (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onClick={() => props.markAsCompleted(todo.id)}                    
                    />
                )
            })}
        </ul>
    )
}

export default TodoList;