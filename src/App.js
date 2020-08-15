import React, { useEffect, useReducer } from 'react';
import './App.css';
import TodoItem from './components/TodoItems'
import { Context } from './context' 
import { TotoListReducer, TotoListInputReducer } from './reducer'

function App() {
  const [tlState, tlDispatch] = useReducer(TotoListReducer, JSON.parse(localStorage.getItem("todos")) || [])
  const [tliState, tliDispatch] = useReducer(TotoListInputReducer, '')

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(tlState))
  },[tlState])

  const inputChange = (value) => {
    if(value.length <= 24)
      tliDispatch({
        type:'add',
        payload:value
      })
  }

  const addTodoItem = (e) => {
    e.preventDefault()
    if(tliState.length === 0)
      return
    
    tlDispatch({
      type:'add',
      payload:tliState
    })
    tliDispatch({
      type:'add',
      payload:''
    })
  }

  return (
    <Context.Provider value={{
      dispatch: tlDispatch
    }}>
      <div className = "App">
        <div className = "todoListContainer"> 
          <p className = "title">Todo List</p>
          <div className = "inputContainer">
            <form onSubmit = {addTodoItem}>
              <input value = {tliState} onChange = {event => inputChange(event.target.value)} type="text" name="newItem" placeholder="Todo label"/>  
            </form>
          </div>
          <div className="itemsContainer"> 
          {
            tlState.map((item, index) => {
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
