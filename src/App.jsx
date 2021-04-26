import './App.css';
import { getCards } from './services/tarot.service.js';

const App = () => {

  const getDeck = async () => {
    let cards = await getCards();
    console.log(cards)
  }

  return (
    <div className="App">
      <h1>Welcome to tarotbot</h1>
      <button>Get reading</button>
      <button>Learn about the cards</button>
      <button onClick={()=>getDeck()}>get deck</button>
    </div>
  );
}

export default App;
