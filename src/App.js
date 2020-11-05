//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Message from './components/Message'
import Timer from './components/Timer'
//import ToDoList from './components/ToDoList'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'

function App()
{
  return (
    <div className="App">
      <Counter></Counter>
      <Message ></Message>
      <Timer></Timer>
      <FunctionClick></FunctionClick>
      <Greet name="Dan">
        <button>Action</button>
      </Greet>



    </div>
  );
}


export default App;
