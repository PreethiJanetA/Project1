import './App.css';
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1>Welcome user!!</h1>
         <button onClick={window['alertmsg']}>It's me!</button>
         
      </header>
    </div>
  );
}

