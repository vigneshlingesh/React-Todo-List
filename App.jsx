import React, { useState } from 'react'
import TopBar from './TopBar'




function App() {
  let [todo,setTodo]=useState([
    {
    id:1,
    title:" Task-1",
    description:"This is the description about my first task",
    status:true

  },
  {
    id:2,
    title:" Task-2",
    description:"This is the description about my second task",
    status:false

  },
  {
    id:3,
    title:"Task-3",
    description:"This is the description about my third task",
    status:true

  }
])
let [completed,setCompleted]=useState("All")
  return <>
  <TopBar todo={todo} setTodo={setTodo} completed={completed} setCompleted={setCompleted}/>
  </>
}

export default App
