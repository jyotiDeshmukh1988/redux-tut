import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <h1>My App Component</h1>
      <User data={{name:"jyoti deshmukh"}}/>
    </div>
  );
}

export default App;
