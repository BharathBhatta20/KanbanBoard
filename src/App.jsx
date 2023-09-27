import './App.css'
import Column from './components/Column';

function App() {
  return (
    <div className='App'>
      <Column status="Planned"/>
      <Column status="Ongoing"/>
      <Column status="Done"/>
    </div>
  )
}

export default App
