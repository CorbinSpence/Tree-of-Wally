import logo from './logo.svg';
import './App.css';

function App() {
  const test = async () => {
    try{
      await fetch("http://localhost:3002/", {
        method: "GET",
        mode: "no-cors",
        credentials: "omit"
      })
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div className="App">
      <h1>Press this button to test the api</h1>
      <button onClick={test}>Test</button>
    </div>
  );
}

export default App;
