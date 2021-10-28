import { actions } from './action';

 const initialState = {
     todos: []
 }

 export default function todoApp(state = initialState, action) {

     switch (action.type) {
         case actions.ADD_TODO:
            return Object.assign({}, state,
                { todos: [...state.todos, { id: action.payload.id, text: action.payload.text, isCompleted: false }]})
         case actions.TOGGLE_TODO:
             return Object.assign({}, state, 
                { todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return Object.assign({}, todo, { isCompleted: !todo.isCompleted })
                    } else {
                        return todo;
                    }
                })})
         case actions.REMOVE_TODOS:
             return Object.assign({}, state, {
                 todos: state.todos.filter(todo => {
                     return !todo.isCompleted
                 })
             })
         default:
             return state;
     }
 }