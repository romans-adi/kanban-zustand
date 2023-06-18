import './App.scss'
import Column from './components/Column';

function App() {
  return (
    <div className="App">
      <h1>Kanban Zustand</h1>
        <Column state="PLANNED"></Column>
        <Column state="ONGOING"></Column>
        <Column state="DONE"></Column>
    </div>
  )
}

export default App;
