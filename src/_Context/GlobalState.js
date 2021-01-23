import React, { createContext, useReducer } from 'react';
import AppReducer from './Reducer'

const initialState = {
    todos: [
        { id: 0, task: 'Dry Clothes' },
        { id: 1, task: 'Read a book' },
    ]
}

// createContext: just named it as globalContext, 
// use createContext hooks
// that will take initialState as parameter
export const GlobalContext = createContext(initialState);

// Global Provider
// function to wrap our entire App.js
// children meaning all of our components
export const GlobalProvider = ({ children }) => {
    // useReducer will take (reducer, initialState) as argument
    // and return state and dispatch method
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // here we will create Actions
    function deleteTodo(id) {
        dispatch ({
            type: 'DELETE_TODO_LIST',
            payload: id
        })
    }

    function addTodo(todo) {
        dispatch ({
            type: 'ADD_TODO_LIST',
            payload: todo
        })
    }

    // return our globalContext
    return (
        <GlobalContext.Provider
            value={{
                todos: state.todos,
                deleteTodo,
                addTodo,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}