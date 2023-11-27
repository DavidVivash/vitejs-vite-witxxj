import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

var rooms = [
  {
    description: 'hello room 1',
    options: [
      {
        value: 'A',
        description: 'Go to room 2'
      },
      {
        value: 'B',
        description: 'Go to room 3'
      }
    ]
  },
  {
    description: 'You are in room 2. There is a window in the corner.',
    options: [
      {
        value: 'A',
        description: 'Go to room 1'
      },
      {
        value: 'B',
        description: 'Go to room 3'
      },
      {
        value: 'C',
        description: 'Climb out of window'
      }
    ]
  },
  {
    description: 'You are in room 3. There is a treasure chest and a window.',
    options: [
      {
        value: 'A',
        description: 'Go to room 1'
      },
      {
        value: 'B',
        description: 'Open treasure'
      },
      {
        value: 'C',
        description: 'Climb out of window'
      }
    ]
  },
  {
    description: 'You found the treasure! You win.',
    options: [
      {
        value: 'A',
        description: 'Play again'
      }
    ]
  },
  {
    description: 'You fall to your death and die.',
    options: [
      {
        value: 'A',
        description: 'Play again'
      }
    ]
  },
];


function App() {
  const [currentRoom,setCurrentRoom] = useState(0);
  function chooseOption(o) 
  {
    if (currentRoom == 0) {
      if (o == 'A') {
        setCurrentRoom(1);
      } else if (o == 'B') {
        setCurrentRoom(2);
      }
    } else if (currentRoom == 1) {
      if (o == 'A') {
        setCurrentRoom(0);
      } else if (o == 'B') {
        setCurrentRoom(2);
      } else if (o == 'C') {
        // change to show a 'YOU DIE' screen
        setCurrentRoom(4);
      }
    } else if (currentRoom == 2) {
      if (o == 'A') {
        setCurrentRoom(0);
      } else if (o == 'B') {
        // change to show 'YOU WIN' message
        setCurrentRoom(3);
      } else if (o == 'C') {
        // change to show a 'YOU DIE' screen
        setCurrentRoom(4);
      }
    } else if (currentRoom == 3) {
      if (o == 'A') {
        setCurrentRoom(0);
      } 
    } else if (currentRoom == 4) {
      if (o == 'A') {
        setCurrentRoom(0);
      } 
    }
  }

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

      {rooms[currentRoom].options.map((i) => 
        <div className="card">
          <button onClick={() => chooseOption(i.value)}>{i.description}</button>
        </div>
      )} 

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
