import Spinner from './components/Spinner';
import './App.css'

function App() {
  const rewards = ['Better luck next time!', '₹50 💸', '2X Savings', '1.5X Savings', '₹50 💸', '₹20 💸', '₹100 Cashback', '2X Savings'];
  return (
    <div>
      <h1>Nads</h1>
        <Spinner items={rewards} />
    </div>
  );
}

export default App;
