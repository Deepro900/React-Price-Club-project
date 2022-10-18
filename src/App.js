
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Pricing from './Component/NavBar/Pricing/Pricing';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold ">This is big header</h1>
      <p>A new para</p>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
