import { render } from '@testing-library/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../../_Context/GlobalState'
import { Todo } from './Todo'

export const Todos = () => {
    // To access our globalContext, use provided useContext hooks
    //  useContext accept our GlobalContext as args
    const { todos } = useContext(GlobalContext)

    // access state
    console.log('am i getting something: ', todos)

    return (
        <>
            <ul>
                {todos.map((todo, id) => (
                    <Todo
                        id={id}
                        todo={todo} 
                    />
                ))}
            </ul>
        </>
    )
}