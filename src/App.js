// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Navbar from './component/Navbar';
import Timeslot from './component/Timeslot';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Navbar />} />
        <Route exact path='/slot' element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
