import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './timeslot.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useLocation } from 'react-router-dom';
import { IoMdCalendar } from 'react-icons/io';
import { FcClock } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

// IoCalendarNumber

function Timeslot() {

  const navigate = useNavigate();
  const location = useLocation();
  const { name = '', email = '', phone = '', messege = '' } = location.state || {};


  const [Name, setName] = useState(name);
  const [Email, setEmail] = useState(email);
  const [Phone, setPhone] = useState(phone);
  const [Messege, setMessege] = useState(messege);

  // console.log('====================================');
  // console.log(Name, name, 'name');
  // console.log('====================================');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');


  


  
  const HandleAppointment = (event) => {
    console.log(name, email, phone, Messege, selectedDate);
    if (!Name || !Email || !Phone || !Messege || !selectedDate || !selectedTimeSlot) {
      alert("Please fill in all the required fields.");
      return; // Prevent form submission
    }
    console.log(name, email, phone, Messege, selectedDate);
    try {

      // Access the Firebase database reference
      event.preventDefault();

      // Access the Firebase database reference
      const database = firebase.database();
      
      // Get the current time
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


       // Get the current date (without the time)
    // const currentDate = new Date().toISOString().split('T')[0];

    // Check if the selected time slot is available
    
    
  
      // Save the form data to Firebase
      database.ref('AppointmentData').push({
        Name,
        Email,
        Phone,
        Messege,
        Date: selectedDate.toISOString().split('T')[0],
        TimeSlot: selectedTimeSlot,
        CurrentTime: currentTime,


      }).then(() => {
        // Clear the form fields
        console.log('data added to firestore')
        alert('Your appointment has book successfully..');
        navigate('/')
        //   history.push('/slot', { name, email, phone, Messege });

      }).catch((error) => {

        console.log('firestore error ', error)
        alert('sorry try again ..')
      }

      )
    ;
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


  // ========================================================Handle Time Slot Availability===================================================================
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  
  const handleTimeSlotClick = (timeSlot) => {

    setSelectedTimeSlot(timeSlot);
    if (selectedDate==='') {
      alert("Please select the Date first..!")
     
      return;
      
     }
    // const currentDate = new Date().toISOString().split('T')[0];
    const database = firebase.database();
    const slotRef = database.ref('/AppointmentData')
    // console.log('====================================');
    //  console.log(selectedDate.toISOString().split('T')[0]);
    // console.log('====================================')
  
    slotRef.orderByChild('Date')
    slotRef.equalTo(selectedDate.toISOString().split('T')[0]);
  slotRef.once('value', (snapshot) => {
    const appointments = snapshot.val();
    if (appointments) {
      const appointmentsOnSelectedDate = Object.values(appointments);
      const slotsBookedOnSelectedDate = appointmentsOnSelectedDate
        .filter(appointment => appointment.TimeSlot === selectedTimeSlot);

      if (slotsBookedOnSelectedDate.length >= 10) {
        // The selected time slot is not available
        alert('The selected time slot is not available. Please choose another time slot.');
        console.log('====================================');
        console.log(selectedTimeSlot);
        console.log('====================================');
        setSelectedTimeSlot('');
        return;
      }
      else{
       
        alert("time slote is available")
      }
    }  

  })
    
  };


  // =============================================================
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <>

      <form >
        <div style={{ alignItems: 'center' }}>
          <div className='slotCnt'>
            <p className='BookHead'> Book your  Appointment.</p>
            <div className='slotInp'>
              <div>
                <input className='inputS' type="text"
                  value={Name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={name===''?'Name*':name} />
                <input className='inputS' type="text"
                  value={Email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={email===''?'Email':email} />
              </div>
              <div>
                <input className='inputS' type="text"
                  value={Phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder={phone===''?'Phone*':phone} />
                <input className='inputS' type="text"
                  value={Messege}
                  onChange={(event) => setMessege(event.target.value)}
                  placeholder={messege===''?'Messege':messege}
                />
              </div>
            </div>
            <hr />
            <div className='time-slot'>
              <p style={{ textAlign: 'center' }}>Select Your Time Slot</p>
              <div className='DatePick'>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  < IoMdCalendar className='caleicon' />
                  <DatePicker className='calender'
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="EEEE, dd/MM/yyyy" // Customize the date format
                    placeholderText="Select a date" // Placeholder text when no date is selected
                    isClearable // Allow clearing the selected date
                    minDate={today}
                    // showYearDropdown // Show a dropdown to select the year
                    scrollableYearDropdown // Enable scrolling in the year dropdown     

                  />
                </div>
              </div>
              <div className='timeSlot'>
                <div>
                  <div className='timeDiv'>
                    <FcClock className='timeicon' /> <button type="button" className='timeBTN' onClick={() => handleTimeSlotClick('09.00 - 10.00 AM')} > <p>09.00 - 10.00 AM</p></button>
                  </div>
                  <div className='timeDiv'>
                    <FcClock className='timeicon' /> <button type="button" className='timeBTN' onClick={() => handleTimeSlotClick('09.00 - 10.00 AM')}> <p>12.00 - 01.00 PM </p></button>
                  </div>
                </div>
                <div>
                  <div className='timeDiv'>
                    <FcClock className='timeicon' /> <button type="button" className='timeBTN' onClick={() => handleTimeSlotClick('09.00 - 10.00 AM')}> <p>10.00 - 11.00 AM</p></button>
                  </div>
                  <div className='timeDiv'>
                    <FcClock className='timeicon' /> <button type="button" className='timeBTN' onClick={() => handleTimeSlotClick('09.00 - 10.00 AM')}> <p>01.00 - 02.00 PM</p></button>
                  </div>
                </div>
              </div>
            </div>

            <div className='btn-box'>
              <button type="button" className="btn"
                onClick={HandleAppointment}
              >Confirm Appointment
                <div className=""></div>
              </button>

            </div>
            <br />
          </div>
        </div>

      </form>
    </>
  )
}

export default Timeslot