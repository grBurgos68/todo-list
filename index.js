function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Aprender React (-)',
      isCompleted: false,
    },
    {
      text: 'reunirse con un amigo para comer (-)',
      isCompleted: false,
    },
    {
      text: 'construir una App para registra actividades (-)',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);

  }

  return(
    <div className="app">
    <div className="todo-list">

    {todos.map((todo,i) => 
      <div classname="todo" key={i} id={i} onClick={removeTodo}> 
      {todo.text}</div>)}

      <TodoForm addTodo={addTodo}/>
      </div>

    </div>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
