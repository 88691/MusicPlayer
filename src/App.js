import React, { useState } from 'react';
import './App.css';
import Select from './componets/Select';

function App() {
  const options = [
    { text: "Select",value: " "}, 
    { text: "Love", value: "love" },
    { text: "Fame", value: "fame" },
    { text: "Money", value: "money" },
  ];

  const [selection, setSelection] = useState("Select");

  return (
    <div className="App">
      <h2>Dropdown Menu</h2>
      <div className="container">
        <Select
          options={options}
          setSelection={setSelection}
        />
      </div>
    </div>
  );
}

export default App;
