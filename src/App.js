import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import {BrowserRouter as Router  ,Routes, Route,} from "react-router-dom"
import FormTask from './Components/Form';
import TaskDetails from './Components/DisplayData/TaskDetails';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="add_task" exact element={<FormTask></FormTask>}/>
      <Route path="/" exact element={<TaskDetails></TaskDetails>}/>
      </Routes>
      </Router>
{/* <Form></Form> */}
    </div>
  );
}

export default App;
