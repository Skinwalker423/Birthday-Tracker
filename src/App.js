import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const handleClearAll = () =>{
    console.log('you clicked me');
  }

  return (
    <main>
      <section className='container'>
        <h3>0 birthdays today</h3>
        <List />
        <button onClick={handleClearAll}>clear all</button>
      </section>
    </main>
  )
}

export default App;
