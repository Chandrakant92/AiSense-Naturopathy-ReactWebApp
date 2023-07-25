/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { PiWarning } from 'react-icons/pi';



function Footer() {
    return (
        <>
            <footer>
                <marquee className="warning" style={{ animationDuration: '1s' }}> <p > <PiWarning />  Please note: Our online naturopathy consultancy services are available for individuals located within the regions where online consultations are permitted.  <PiWarning /></p> </marquee>
                <div className='footerConatier' style={{ backgroundColor: '#1993b5', padding: '1%' }}>
                    <h3 style={{ textAlign: 'center', color: 'white' }}>SHEGAON MAHARASHTRA</h3>
                    <div className='footerBox' >
                        <div className='footerTag' style={{ marginLeft: '2%', }}>
                            <h3 >AiSense LLP</h3>
                            <li>About</li>
                            <li>What we offer</li>
                            <li>Consultation</li>
                            <li>Book an Appointment</li>
                            <li>Terms and Conditon</li>
                            <li>Privacy Policy</li>
                        </div>
                        <div className='footerTag' style={{ marginLeft: '2%', }}>
                            <h3 >Services</h3>
                            <li>Personalized Wellness</li>
                            <li>Natural Treatment</li>
                            <li>Health Education</li>
                            <li>Ongoing Support</li>
                            <li>Lifestyle Guidance</li>

                        </div>
                        <div className='footerTag' style={{}}>
                            <h3 >Contact us</h3>
                            <p>Email :-
                                naturopathy@aisense.co.in</p>
                            <p>Contact no :- +91 8578435793</p>
                            <div style={{ display: 'flex', flexDirection: 'row', }}>
                                <div>
                                    Location :-
                                </div>
                                <div className='location' style={{ marginLeft: '2%' }}>
                                    <p>Shegoan</p>
                                    <p>Maharashtra</p>
                                    <p>India - 444402</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#e9ebf0', borderRadius: '10px', padding: '1%', marginRight: '5%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ color: '#0ea3cc', textAlign: 'center' }}>Book An Appointment</h3>
                                <input className='input' placeholder='Name*' type="text" />
                                <input className='input' placeholder='Email' type="text" />
                                <input className='input' placeholder='Contact no.*' type="text" />
                                <input className='input' placeholder='Message' type="text" />
                                <div style={{ backgroundColor: '#0ea3cc', margin: '5%', borderRadius: '10px', cursor: 'pointer' }}>
                                    <p className='submitBTN' style={{ textAlign: 'center' }}>SUBMIT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <div className='copyright'>
                        <p className='' style={{ color: 'white', textAlign: 'center' }}> © Copyright AiSense LLP. All Rights Reserved</p>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginRight: '5%' }}>
                            <p style={{ backgroundColor: 'white', padding: '12px', borderRadius: '20px', marginRight: '3%', color: '#1993b5' }}><FaFacebookF /></p>
                            <p style={{ backgroundColor: 'white', padding: '12px', borderRadius: '20px', marginRight: '3%', color: '#1993b5' }}><BsTwitter /></p>
                            <p style={{ backgroundColor: 'white', padding: '12px', borderRadius: '20px', marginRight: '3%', color: '#1993b5', }}><AiFillYoutube /></p>
                            <p style={{ backgroundColor: 'white', padding: '12px', borderRadius: '20px', marginRight: '3%', color: '#1993b5' }}><FaLinkedinIn /></p>
                        </div>
                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer