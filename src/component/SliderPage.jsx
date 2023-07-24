import React from 'react'
import './about.css'
import { FcOk } from "react-icons/fc";


function SliderPage(props) {
    return (
        <>
            <div>
                <div className='sliderP'>
                    <div className='sliderCnt'>
                        <div className='imageSl'>
                            <img src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/nephro.png" alt="..." className='sliderImage ' />

                        </div>
                        <div>
                            <div className='description'>
                                <h3>{props.name}</h3>
                                <p>{props.info}</p>
                                <div className='treatment'>
                                    <div>
                                        <p className=''>  <FcOk className='' /> Hemodialysis</p>
                                        <p className=''>  <FcOk className='' /> Hemodialysis</p>
                                    </div>
                                    <div>
                                        <p className=''>  <FcOk className='' /> Hemodialysis</p>
                                        <p className=''>  <FcOk className='' /> Hemodialysis</p>
                                    </div>

                                </div>
                                <div className='buttonNav'>
                                    <div style={{ backgroundColor: '#0ea3cc', margin: '5%', borderRadius: '20px', cursor: 'pointer', width: '200px' }}>
                                        <p style={{ textAlign: 'center', fontSize: '15px', paddingTop: '10px', paddingBottom: '10px' }}>Book an Appointment</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SliderPage