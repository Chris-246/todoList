import { connect } from 'react-redux';
import App from '../App';
import { addTodo, toggleTodo, removeTodos } from '../lib/action';

export const AppContainer = connect(
    function mapStateToProps(state) {
        return { todos: state.todos }
    },
    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id)),
            removeTodos: () => dispatch(removeTodos())
        }
    }
)(App)