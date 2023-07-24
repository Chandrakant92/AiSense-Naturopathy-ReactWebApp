// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Navbar from './component/Navbar';
import Timeslot from './component/Timeslot';
import Appointment from './component/Appointment';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Navbar />} />
        <Route exact path='/slot' element={<Timeslot />} />
        <Route exact path='/Appointment' element={<Appointment />} />
        <Route exact path='/Home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

// const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });