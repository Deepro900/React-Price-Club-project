
import './App.css';
import AssignmentMarks from './Component/AssignmentMarks/AssignmentMarks';
import NavBar from './Component/NavBar/NavBar';
import Pricing from './Component/NavBar/Pricing/Pricing';
import PhoneBar from './Component/PhoneBar/PhoneBar';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold ">This is big header</h1>
      <p>A new para</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
