import React, { useState, useContext } from 'react'
import { GlobalContext } from '../_Context/GlobalState'

export const InputBox = () => {
    const [task, setTask] = useState('');
    const { addTodo } = useContext(GlobalContext);

    const handleSubmit = e => {
        e.preventDefault()
        
        // create new Object to be send
        const newTodoList = {
            id: Math.floor(Math.random() * 100000000),
            task: task,
        }

        // passed created Object into our add function
        addTodo(newTodoList)
    }

    return (        
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={e => setTask(e.target.value)}name="name" placeholder="Add to do list.. "/>
                <input type="submit" value="Add"/>
            </form>
        </>
    )
}