import React, { useState, useEffect } from 'react'
import './home.css'
// import { image } from '../assets/image.png'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
function Appointment() {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [Messege, setMessege] = useState('');



  const HandleAppointment = (event) => {

      if (name === '' || email === '' || phone === '' || Messege ==='') {
          // alert("Data uploaded successfully")
         
          alert('All fields are required');
          return;
      }
   else if (phone.length !== 10) {
          alert("Phone number should be 10 digit");
          return;
      }
      try {

      // Access the Firebase database reference
      event.preventDefault();

      // Access the Firebase database reference
      const database = firebase.database();

      // Save the form data to Firebase
      database.ref('Appointment Data').push({
          name,
          email,
          phone,
          Messege

      }).then(() => {
           // Clear the form fields
          setName('');
          setEmail('');
          setMessege('');
          setPhone('');
          console.log('data added to firestore')
          alert('Your appointment has book successfully..')
      }).catch((error) => {

          console.log('firestore error ', error)
          alert('sorry try again ..')
      }

      )
  }
  catch (error) {
      
      console.log('system error ', error.message)
  }
  
  }

  useEffect(() => {
      // Initialize Firebase app
      firebase.initializeApp({
          // Your Firebase config object
          apiKey: "AIzaSyD0COqyjZAKhqSTUYEjBXGFqFkpYXcSLbM",
          authDomain: "aisensehospital.firebaseapp.com",
          databaseURL: "https://aisensehospital-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "aisensehospital",
          storageBucket: "aisensehospital.appspot.com",
          messagingSenderId: "930945176581",
          appId: "1:930945176581:web:f285076c70e28282b8b86c",
          measurementId: "G-97VPV39KGC"

      });
  }, []);

  return (
    <>
    <form onSubmit={HandleAppointment}>
                    <div className="container-form">


                        <div className="form-inside">
                            <div className="form-border">
                                <div className='form-text'>Book An Appointment</div>
                                <div className="box">
                                    <div className='input-box'>

                                        <input type="text" placeholder="Name*"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                            className="inputA" />

                                        <input type="text" placeholder="Phone*"
                                            value={phone}
                                            onChange={(event) => setPhone(event.target.value)}
                                            className="inputA" />
                                    </div>
                                    <div className='input-box1'>

                                        <input type="text" placeholder="Email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            className="inputA" />

                                        <input type="text" placeholder="Messege"
                                            value={Messege}
                                            onChange={(event) => setMessege(event.target.value)}
                                            className="inputA" />
                                    </div>

                                    <div className='btn-box'>
                                        <button type="submit" class="btn">Submit
                                        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                        </button>
                                            
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </form>
    </>
  )
}

export default Appointment