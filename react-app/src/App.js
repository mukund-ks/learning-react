// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Hello from './components/Hello';
import Message from './components/Message';
import ConditionalComponent from './components/ConditionalComponent';
import Product from './components/Product';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Hello />
      <Profile name='CCP' name2='Xi Jinping' />
      <Message code='2' msgContent='Chocolate' />
      <ConditionalComponent />
      <Product />
      <Form />
    </div >
  );
}

export default App;
