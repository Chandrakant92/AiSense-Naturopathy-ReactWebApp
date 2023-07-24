import React, { useState, useEffect } from 'react'
import './home.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useNavigate } from 'react-router-dom';



function Appointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Messege, setMessege] = useState("");
  const navigate = useNavigate();

  const HandleAppointment = (event) => {
   

      if (name === '' || email === '' || phone === '' || Messege ==='') {
          // alert("Data uploaded successfully")
         
          alert('All fields are required');
          return;
      }
   else if (phone.length !== 10) {
          alert("Invalid phone number");
          return;
      }

      navigate('/slot',   { state: { name, email, phone, Messege }} )

  return (
    <>
      <form>
        <div className="container-form">
          <div className="form-inside">
            <div className="form-border">
              <div className="form-text">Book An Appointment</div>
              <div className="box">
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Name*"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="inputA"
                  />

                  <input
                    type="text"
                    placeholder="Phone*"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="inputA"
                  />
                </div>
                <div className="input-box1">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="inputA"
                  />

                  <input
                    type="text"
                    placeholder="Messege"
                    value={Messege}
                    onChange={(event) => setMessege(event.target.value)}
                    className="inputA"
                  />
                </div>

                <div className="btn-box">
                  <button type="button" onClick={HandleAppointment} class="btn">
                    Submit
                    <div className=""></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Appointment;
