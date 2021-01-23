import React, { useContext } from 'react'
import { GlobalContext } from '../../_Context/GlobalState'

// this component is to render each to do list that was mapped before
export const Todo = ({ todo }) => {
    const { deleteTodo } = useContext(GlobalContext);

    return (
        <>
            <li>
                {todo.task}
                <button
                    onClick={() => deleteTodo(todo.id)}
                >
                    x
                </button>
            </li>
        </>
    )
}
