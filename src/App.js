import logo from './logo.svg';
import './App.css';
import { Hellow } from './Hellow';
import { Players } from './Players';
import {Count} from './Count'
import User from './User';
function App() {
  return (
    <div className="App">
      <Hellow />
      <Players name='uv' />
      <Count />
      <User id='9' />
    </div>
  );
}

export default App;
