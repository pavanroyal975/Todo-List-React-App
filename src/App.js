import React,{useState} from 'react'
import TodoList from './TodoList'
const App = () => {
  const [task,setTask]=useState('')
  const [todos,setTodos]=useState([])
  const changeHandler=e=>{
    setTask(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault()
    const newTodos=[...todos,task]
    setTodos(newTodos)
    setTask("")
  }
  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=>index!==indexValue)
    setTodos(newTodos)
  }
  return (
    <div>
      <center>
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">TodoList App</h3>
            <form onSubmit={submitHandler}>
              <input type="text" value={task} onChange={changeHandler}/>&nbsp;&nbsp;
              <input type="submit" value="add" name="add" />
            </form>
            <TodoList todos={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center> 
    </div>
  )
}

export default App
