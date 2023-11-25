import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

var rooms = [
  {
    description: 'hello room 1',
  },
  {
    description: 'hello room 2',
  },
];

const [currentRoom] = useState(0);
function chooseOption(o) 
{
currentRoom=1;
}

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div>{rooms[currentRoom].description}</div>

      <div className="card">
        <button onClick={() => chooseOption('A')}>Option A</button>
      </div>

      <div className="card">
        <button onClick={() => chooseOption('B')}>Option B</button>
      </div>

      <div className="card">
        <button onClick={() => chooseOption('C')}>Option C</button>
      </div>

      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
