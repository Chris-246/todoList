import React from 'react'; 
import './App.css';
import TodoList from './components/TodoList';

const Empty = () => {
  return (
    <div>
      <div>
        <p>No items</p>
      </div>
    </div>
  )
}

const Header = props => {
  const { handleChange, handleAdd, text} = props;

  return (
    <div>
      <h1>My Todo List</h1>
      <form>
        <div className='formHeader'>
        <div className='inputHeader'>
          <input onChange={(e) => handleChange(e)} value={text} />
        </div>
        <div>
          <button onClick={(e) => handleAdd(e)} disabled={!text}>Add</button>
        </div>
        </div>
      </form>
    </div>
  )
}

const Body = props => {
  const { todos } = props;
  const isEmpty = !todos.length;

  if (isEmpty) {
    return (<Empty/>)
  } else {
    return (
      <div>
        <TodoList {...props}/>
      </div>
    )
  }
}

const Footer = props => {
  const { todos, handleDelete } = props;
  const isCompleted = todos.filter(item => {return item.isCompleted});

  return (
    <div>
      <button onClick={() => handleDelete()} hidden={!isCompleted}>Deleted Completed</button>
    </div>
  )
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  componentDidMount() {
    let todos = localStorage.getItem('todos') != null ? JSON.parse(localStorage.getItem('todos')) : [];
    this.setState({ items: todos });
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.items))
  }

  handleChange = e => {
    this.setState({text: e.target.value});
  }

  handleAdd = e => {
    e.preventDefault();
    if (!this.state.text) { return false }
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  markAsCompleted = id => {
    console.log(this.props, 'in function');
    this.props.toggleTodo(id);
  }

  handleDelete = () => {
    this.props.removeTodos();
  }

  render() {
    return (
      <div>
        <div>
          <Header {...this.props} {...this.state} handleChange={this.handleChange} handleAdd={this.handleAdd}/>
          <Body {...this.props} markAsCompleted={this.markAsCompleted} />
          <Footer {...this.props} handleDelete={this.handleDelete} />
        </div>
      </div>
    )
  }
}

export default App;
