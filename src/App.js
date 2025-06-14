import './App.css';
import { Counter } from './components/Counter';
import { Info } from './components/Info';

import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0)

  const increment = () => {
    setValue(prev => prev + 1)
  }

  const decrement = () => {
    setValue(prev=> prev -1)
  }

  return (
    <div className="App">
      <Info value={value}/>
      <Counter increment={increment} decrement={decrement}/>
    </div>
  );
}

export default App;
