import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import TodoItem from './components/TodoItems'
import { Context } from './context' 
import Reducer from './reducer'

function App() {
  const [state, dispatch] = useReducer(Reducer, JSON.parse(localStorage.getItem("todos")))
  const [todoLabel, setTodoLabel] = useState('')
  
  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(state))
    console.log(state)
  },[state])

  const inputChange = (value) => {
    if(value.length <= 24)
    setTodoLabel(value)
  }

  const addTodoItem = (e) => {
    e.preventDefault()
    if(todoLabel.length === 0)
      return
    dispatch({
      type:'add',
      payload:todoLabel
    })
    setTodoLabel('')
  }

  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className = "App">
        <div className = "todoListContainer"> 
          <p className = "title">Todo List</p>
          <div className = "inputContainer">
            <form onSubmit = {addTodoItem}>
              <input value = {todoLabel} onChange = {event => inputChange(event.target.value)} type="text" name="newItem" placeholder="Todo label"/>  
            </form>
          </div>
          <div className="itemsContainer"> 
          {
            state.map((item, index) => {
              return <TodoItem key={index} {...item}/>
            })
          }
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
