import guesses_arr from './guesses';
import EightBall from './EightBall';
import './App.css';


function App() {
  return (
    <>
      <h1 className="header">Eight Ball Game.</h1>
      <div className="App">
        <EightBall guesses={guesses_arr} />
      </div>
    </>
  );
}

export default App;
