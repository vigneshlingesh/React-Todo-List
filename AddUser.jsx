import React from 'react'
import EditUser from "./EditUser"

function AddUser({todo,setTodo, completed, setCompleted,onEdit}) {

  let Delete =() =>{
    setTodo((preventTodo)=>
    preventTodo.filter((item)=>item.id !==todo.id)
    )
  }

  return (
    <div className="col">
      <div className="card" style={{ width: '18rem', fontWeight: 500, margin: 10 }}>
        <div className="card-body">
          <h5 className="card-title">Name:{todo.title}</h5>

          <p className="card-text">Description:{todo.description}</p>
          <div className="btn-group">
            Status &nbsp;
            <button
              className="btn btn-primary btn-sm dropdown-toggle" id="button" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {todo.status ? 'Completed':'Not Completed'}
            </button>
            <ul className="dropdown-menu" aria-labelledby='button'>
              <li>All</li>
              <li>Completed</li>
              <li>Not Completed</li>              
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-end w-auto">
          <div>
            <button className="btn btn-success btn-sm w-auto" onClick={onEdit}> Edit </button>
          </div> &nbsp;
          <div>
            <button className="btn btn-danger btn-sm w-auto" onClick={Delete}> Delete </button>
          </div>
        </div>
      </div>
    </div>
  );
}   


export default AddUser; 
