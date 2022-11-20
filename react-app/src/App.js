// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Hello />
      <Profile name='CCP' name2='Xi Jinping' />
      <Message code='2' msgContent='Chocolate' />
      <Counter />
    </div >
  );
}

export default App;
