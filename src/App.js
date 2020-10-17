import React from 'react';
import './App.css';
import { Button } from './components/Button'

const day = 'Saturday'


function App() {
  return (
    <div className="App">
      <p>Hello! Today is {day}</p>
      <Button>Don't click me</Button>
      <Button color="yellow">DUPA</Button>
      <Button>Another one</Button>
    </div>
  );
}

export default App;
