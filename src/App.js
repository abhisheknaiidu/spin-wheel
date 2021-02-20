import Spinner from './components/Spinner';
import './App.css'
import Header from './components/Header';

function App() {
  const rewards = ['Better luck next time!', '₹5 💸', '₹10 💸', '1.5X Savings', '₹50 💸', '₹20 💸', '₹100 Cashback', '2X Savings'];
  return (
    <div className="App">
      <Header />
      <Spinner items={rewards} />
      {/* <div className="info">
        <h1 className="info-des">Tap on Center or rotate the wheel anti-clockwise and release to start spinning</h1>
      </div>
      <div className="getHelp">
        <h4>Have a question? <span style={{ color: "#FFDDA1" }}>Get help</span></h4>
      </div> */}
    </div>
  );
}

export default App;
