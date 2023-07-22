import React, { useState, useEffect } from "react";
import "./home.css";
// import { image } from '../assets/image.png'
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useNavigate } from "react-router-dom";

function Appointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Messege, setMessege] = useState("");
  const navigate = useNavigate();

  const HandleAppointment = (event) => {
    if (name === "" || email === "" || phone === "" || Messege === "") {
      // alert("Data uploaded successfully")

      alert("All fields are required");
      return;
    } else if (phone.length !== 10) {
      alert("Phone number should be 10 digit");
      return;
    }
    try {
      // Access the Firebase database reference
      event.preventDefault();

      // Access the Firebase database reference
      const database = firebase.database();

      // Save the form data to Firebase
      database
        .ref("Appointment Data")
        .push({
          name,
          email,
          phone,
          Messege,
        })
        .then(() => {
          // Clear the form fields
          setName("");
          setEmail("");
          setMessege("");
          setPhone("");
          console.log("data added to firestore");
          alert("Your appointment has book successfully..");
          //   history.push('/slot', { name, email, phone, Messege });
          navigate("/slot", { state: { name, email, phone, Messege } });
        })
        .catch((error) => {
          console.log("firestore error ", error);
          alert("sorry try again ..");
        });
    } catch (error) {
      console.log("system error ", error.message);
    }
  };

  useEffect(() => {
    // Initialize Firebase app
    firebase.initializeApp({
      // Your Firebase config object
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    });
  }, []);

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
