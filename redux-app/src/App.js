import logo from './logo.svg';
import axios from "axios"
import './App.css';
import ChampForm from './components/champForm';
import ChampList from './components/champList';
import Champion from './components/champ';

function App() {

  
  return (
    <div className="App">
        <ChampForm />
        <Champion />
        <ChampList />
    </div>
  );
}

export default App;
