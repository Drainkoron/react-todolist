import React, { useContext } from 'react';
import s from '../styles/TodoItems.module.css'
import { Context } from '../context'

const TodoItem = ({index, label, isComplited }) => {
    const { dispatch } = useContext(Context)
    
    const setItemClassNames = () => {
        let classList = []
        classList.push(s.item)
        
        if( isComplited )
            classList.push(s.complited)

        return classList
    }  

    return (        
        <div className="todoItemsContainer">
            <div className={setItemClassNames().join(' ')}>
                <input onChange={(e) => dispatch({type: 'toggle', payload: index})} type="checkbox" checked = {isComplited}/>
                {label}
                <div onClick = {() => dispatch({type: 'remove', payload: index})} className={ s.button }>x</div>
            </div>         
        </div>
    )
}

export default TodoItem;
