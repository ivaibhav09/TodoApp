import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoLayout = ({ items, onNewItem, onDeleteItem }) => {

  const[todoName, setTodoName] = useState("");
  const[todoDate, setTodoDate] = useState("");

  const handleChangeName = (event) => {
       setTodoName(event.target.value);
  }
  const handleChangeDate = (event) => {
    setTodoDate(event.target.value);
  }
  const handleAddButton = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
   
  }
 
  return (
    <>
      <h1 className='heading'>Todo App</h1>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <input type="text" placeholder="Enter todo here" value={todoName} className='todo' onChange={handleChangeName}  required/>
          </div>
          <div className="col">
            <input type="date" className='date' value={todoDate} onChange={handleChangeDate}  required/>
          </div>
          <div className="col">
          {todoName ? <button type="button" className="btn btn-success" onClick={handleAddButton}>Add</button> : 
          <h6 style={{background: "tomato", color: "white"}}>Enter Todo Details first</h6>}
          </div>
        </div>
      </div>
      {items.map((item, index) => (<TodoItem key={index} todo={item} deleteItem = {onDeleteItem}></TodoItem>))}
    </>
  )
}

export default TodoLayout
