import './App.css'
import Column from './components/Column';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Column state="PLANNED"/>
      <Column state="ONGOING"/>
      <Column state="DONE"/>
    </div>
  )
}

export default App
