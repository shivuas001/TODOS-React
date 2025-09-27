import { useState } from "react"

export default function App() {

  const [title, setTitle] = useState('');

  const [todos, setTodos] = useState([])
  
  const addTodo = ()=>{
    console.log(title);

    const newTodo = {title, completed:false}

    const UpdatedTodo = [...todos, newTodo]

    setTodos(UpdatedTodo)
    
  }


  return (
    <div className="main-wrapper">
      <h1 className="title">React Todos</h1>

      <div className="todos">

        <div className="todo-add">
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter Todo Title" />
        <button onClick={addTodo}>Add Now</button>
        </div> 

        {todos.map((todo)=> {
          <div className="todos-item">
          <h2>{todo.title}</h2>
          <button className="todo-btn">Done</button>
          </div>
        })}
      </div>
    </div>
  )
}