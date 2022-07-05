import { useState } from 'react';

import './App.css';
import List from './List';
import data from './data.js';

function App() {
  const [people, setPeople] = useState(data);
  console.log(people.length);
  const toggle = () => {
    if (people.length === 0) {
      setPeople(data);
    } else {
      setPeople(() => []);
    }
  };
  return (
    <main>
      <section className="container">
        <h3>5 birthday reminder</h3>
        <List people={people} />
        <button onClick={toggle}>{people.length === 0 ? 'show all' : 'clear all'}</button>
      </section>
    </main>
  );
}

export default App;
