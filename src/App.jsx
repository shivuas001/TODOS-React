import { useState } from "react"

export default function App() {

  const [title, setTitle] = useState('');

  const localTodos = localStorage.getItem('todos')

  const [todos, setTodos] = useState(JSON.parse(localTodos))
  
  const addTodo = () => {
    console.log(title);

    const newTodo = {title, completed:false}

    const UpdatedTodo = [...todos, newTodo]

    setTodos(UpdatedTodo)

    setTitle('')

    localStorage.setItem('todos' , JSON.stringify(UpdatedTodo))
    
  }

  const markDone = (todoItem)=>{
    console.log(todoItem);

    const UpdatedTodo = todos.map((todoElement)=>{
      if(todoElement.title === todoItem.title){
        return{title: todoElement.title, completed: true}
      }
      return todoElement;
    })

    setTodos(UpdatedTodo);
    localStorage.setItem('todos', JSON.stringify(UpdatedTodo));
    
  }


  return (
    <div className="main-wrapper">
      <h1 className="title">React Todos</h1>

      <div className="todos">

        <div className="todo-add">
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter Todo Title" />
        <button onClick={addTodo}>Add Now</button>
        <button onClick={()=> {localStorage.clear()
          setTodos([])
        }}>Clear Todos</button>
        </div> 

        {todos.map((todo)=> (
          <div key={todo.title} className="todos-item">
            <h2 style={{textDecoration: todo.completed ? 'line-through' : ''}}>{todo.title}</h2>

            <button onClick={()=> markDone(todo)} className="todo-btn">Done</button>
          </div>
        ))}

      </div>
    </div>
  )
}