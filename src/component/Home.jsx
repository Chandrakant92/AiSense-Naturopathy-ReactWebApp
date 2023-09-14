import React from 'react'
import './home.css'
import 'firebase/compat/database';
// import { image } from '../assets/image.png'
// import firebase from 'firebase/compat/app';



function Home() {

  return (
    <>
      <div className='container'>
        <div className='main'>
          <div className='heading'>
            <div className='headinName'>
              <h2>Revive, Restore, Renew <br />
                Elevate Your Health with us!</h2>
              <p>From our Experienced specialist</p>
            </div>
            {/* <div className='buttonHome'>
              <div style={{ backgroundColor: 'white', borderRadius: '20px', cursor: 'pointer', width: '200px' }}>
                <p style={{ textAlign: 'center', fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', color:'#1993b5', fontWeight:600 }}>Book an Appointment</p>

              </div>
            </div> */}

          </div>
          <div>
            <img className='homeImage' src={require('../assets/image.png')} alt=".." />
          </div>
        </div>


      </div>
    </>
  )
}

export default Home