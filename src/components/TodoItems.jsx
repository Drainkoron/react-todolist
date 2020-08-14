import React, { useContext, useEffect  } from 'react';
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

    const setItem = () => {
        return ( 
            <div className={setItemClassNames().join(' ')}>
                <input type="checkbox" onChange = { () => dispatch({type: 'toggle', payload: index}) } checked = {isComplited}/>
                {`${label.substring(0, 25)}`}
                <div className={ s.button } onClick={ () => dispatch({type: 'remove', payload: index}) }>x</div>
            </div>
        )
    }

    return (
        <div className="todoItemsContainer">
        { setItem() }         
        </div> 
    );
}

export default TodoItem;
