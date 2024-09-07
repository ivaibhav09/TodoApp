import React from 'react'

const TodoItem = ({ todo, deleteItem }) => {

  return (
    <>
      <div className="container text-center">
        <div className="row align-items-center"> 
          <div className="col">
            <h5>{todo.name}</h5>
          </div>
          <div className="col">
            <h5>{todo.dueDate}</h5>
          </div>
          <div className="col">
            <button type="button" className="btn btn-danger todobtn" onClick={() => deleteItem(todo.name)}>Delete</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoItem
