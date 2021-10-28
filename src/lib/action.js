export const actions = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    REMOVE_TODOS: 'REMOVE_TODOS',
}

export function addTodo(text) {
    const uid = Math.random().toString(34).slice(2);
    return {
        type: actions.ADD_TODO,
        payload: { id: uid, text: text, isCompleted: false }
    }
}

export function toggleTodo(id) {
    return {
        type: actions.TOGGLE_TODO,
        payload: { id: id },
    }
}

export function removeTodos(id) {
    return {
        type: actions.REMOVE_TODOS,
        payload: {},
    }
}