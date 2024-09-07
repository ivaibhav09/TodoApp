import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import TodoLayout from './components/TodoLayout'
import WelcomeMsg from './components/WelcomeMsg';

function App() {
  let initialTodoItems = [
    {
      name: 'Buy Milk',
      dueDate: '1/09/2024'
    },
    {
      name: 'Gym',
      dueDate: '1/09/2024'
    },
    {
      name: 'Library',
      dueDate: '2/09/2024'
    }
  ];    
 
  const[todoItems, setTodoItems] = useState(initialTodoItems);
   
  const handleNewItem = (itemName, itemDate) =>{
      console.log(`New Item Added:${itemName}, Date: ${itemDate}`);

      const newItems = [...todoItems, {name: itemName, dueDate: itemDate}];
      setTodoItems(newItems);
  }

  const handleDeleteItem = (todoItemName) =>{
    console.log(`Item Deleted: ${todoItemName}`)
    const newTodo = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodo);
  }
 
  return (
    <>
      <TodoLayout onNewItem = {handleNewItem} onDeleteItem = {handleDeleteItem} items={todoItems}></TodoLayout>
      {todoItems.length === 0 && <WelcomeMsg />}
    </>
  )
}

export default App
