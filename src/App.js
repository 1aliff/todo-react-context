import React from 'react'
import './App.css';
import { InputBox } from './Components/InputBox'
import { Todos } from './Components/Todos/Todos'
import { GlobalProvider } from './_Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="wrapper">
        <h3>To do list using React Context</h3>
        <InputBox />
        <Todos />
      </div>
    </GlobalProvider>
  );
}

export default App;
