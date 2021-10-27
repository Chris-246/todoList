export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODOS = 'REMOVE_TODOS';

const uid = Math.random().toString(34).slice(2);
export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: { id: uid, text: text, isCompleted: false }
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        payload: id,
    }
}

export function removeTodos(id) {
    return {
        type: REMOVE_TODOS,
        payload: {},
    }
}