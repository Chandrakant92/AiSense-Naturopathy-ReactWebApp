import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './timeslot.css'
import { useLocation } from 'react-router-dom';
import { IoMdCalendar } from 'react-icons/io';
import { FcClock } from 'react-icons/fc';

// IoCalendarNumber

function Timeslot() {


  const location = useLocation();
  const { name = '', email = '', phone = '', Messege = '' } = location.state || {};
    const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
        setSelectedDate(date);
  };

  const HandleAppointment = () => {
    console.log(name,email, phone, Messege, selectedDate );
    if (!name || !email || !phone || !Messege || !selectedDate) {
      alert("Please fill in all the required fields.");
      return; // Prevent form submission
    }
    console.log(name,email, phone, Messege, selectedDate);
    alert("Your appointment has book successfully..", )
  }


  return (
    <>
      {/* <div>
      <h1> Book your  Appointment.</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Message: {Messege}</p>
    </div> */}
      <form >
        <div style={{ alignItems: 'center' }}>
          <div className='slotCnt'>
            <p> Book your  Appointment.</p>
            <div className='slotInp'>
              <div>
                <input className='inputS' type="text" defaultValue={name} placeholder="Name" />
                <input className='inputS' type="text" defaultValue={email} placeholder="Email" />
              </div>
              <div>
                <input className='inputS' type="text" defaultValue={phone} placeholder="Phone" />
                <input className='inputS' type="text" defaultValue={Messege} placeholder="Message" />
              </div>
            </div>
            <hr />
            <div>
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
                    <FcClock className='timeicon' /> <button type="button" className='timeBTN'> <p>09.00 - 10.00 AM</p></button>
                  </div>
                  <div className='timeDiv'>
                    <FcClock className='timeicon' /> <button type="button" className='timeBTN'> <p>12.00 - 01.00 PM </p></button>
                  </div>
                </div>
                <div>
                  <div className='timeDiv'>
                    <FcClock className='timeicon' /> <button type="button" className='timeBTN'> <p>10.00 - 11.00 AM</p></button>
                  </div>
                  <div className='timeDiv'>
                    <FcClock className='timeicon' /> <button type="button" className='timeBTN'> <p>01.00 - 02.00 PM</p></button>
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