import React, { useState , useEffect} from 'react';
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
 
  const { name = '', email = '', phone = '', Messege = '' } = location.state || {};
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

    const handleTimeSlotClick = (timeSlot) => {
      setSelectedTimeSlot(timeSlot);
    };
   

  const handleDateChange = (date) => {
        setSelectedDate(date);
  };

  const HandleAppointment = (event) => {
    console.log(name,email, phone, Messege, selectedDate );
    if (!name || !email || !phone || !Messege || !selectedDate) {
      alert("Please fill in all the required fields.");
      return; // Prevent form submission
    }
    console.log(name,email, phone, Messege, selectedDate);
    try {

      // Access the Firebase database reference
       event.preventDefault();

      // Access the Firebase database reference
      const database = firebase.database();
      
         // Get the current time
         const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        console.log(currentTime);
      // Save the form data to Firebase
      database.ref('AppointmentData').push({
          name,
          email,
          phone,
          Messege,
          Date: selectedDate.toISOString().split('T')[0],
          TimeSlot:selectedTimeSlot,
          CurrentTime: currentTime,
         

      }).then(() => {
           // Clear the form fields
          console.log('data added to firestore')
          alert('Your appointment has book successfully..');
        //   history.push('/slot', { name, email, phone, Messege });
       
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
    
      <form >
        <div style={{ alignItems: 'center' }}>
          <div className='slotCnt'>
            <p className='text-book'> Book your  Appointment.</p>
            <div className='slotInp'>
              <div>
                <input className='inputS' type="text" defaultValue={name} placeholder="Name"   />
                <input className='inputS' type="text" defaultValue={email} placeholder="Email"    />
              </div>
              <div>
                <input className='inputS' type="text" defaultValue={phone} placeholder="Phone"  />
                <input className='inputS' type="text" defaultValue={Messege} placeholder="Message"  />
              </div>
            </div>
            <hr />
            <div className='time-slot'>
              <p>Select Your Time Slot</p>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                < IoMdCalendar className='caleicon' />
                <DatePicker className='calender'
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="EEEE, dd/MM/yyyy" // Customize the date format
                  placeholderText="Select a date" // Placeholder text when no date is selected
                  isClearable // Allow clearing the selected date
                  // showYearDropdown // Show a dropdown to select the year
                  scrollableYearDropdown // Enable scrolling in the year dropdown     
                
                />
              </div>
              <div className='timeSlot'>
                <div>
                  <div className='timeDiv'>
                    <FcClock className='timeicon' /> <button type="button" className='timeBTN'   onClick={() => handleTimeSlotClick('09.00 - 10.00 AM')} > <p>09.00 - 10.00 AM</p></button>
                  </div>
                  <div className='timeDiv'>
                    <FcClock className='timeicon' /> <button type="button" className='timeBTN'  onClick={() => handleTimeSlotClick('12.00 - 01.00 PM ')}> <p>12.00 - 01.00 PM </p></button>
                  </div>
                </div>
                <div>
                  <div className='timeDiv'>
                    <FcClock className='timeicon' /> <button type="button" className='timeBTN'  onClick={() => handleTimeSlotClick('10.00 - 11.00 AM')}> <p>10.00 - 11.00 AM</p></button>
                  </div>
                  <div className='timeDiv'>
                    <FcClock className='timeicon' /> <button type="button" className='timeBTN'  onClick={() => handleTimeSlotClick('01.00 - 02.00 PM')}> <p>01.00 - 02.00 PM</p></button>
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
          </div>
        </div>
      </form>
    </>
  )
}

export default Timeslot