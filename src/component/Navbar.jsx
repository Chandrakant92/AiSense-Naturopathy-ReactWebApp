/* eslint-disable no-lone-blocks */
import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Appointment from './Appointment';
import './navbar.css'
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { CgMenu } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';


function Navbar() {


    const [showMenu, setShowMenu] = useState(false);


    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    const navigate = useNavigate();

    const handleBook = () => {
        navigate('/slot')
    }


    return (
        <>
            <div  >
                <nav className="navbar">

                    <div > <h1>AiSense Naturopathy</h1></div>
                    <div className='header'>
                        <div className='homeT'>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <p>  Home</p>
                            </Link>
                        </div>
                        <div className='homeT'>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <p> About us</p>
                            </Link>
                        </div>
                        <div className='homeT'>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <p> Contact us</p>
                            </Link>
                        </div>
                        <div className='homeT'>
                            <Link
                                // activeClass="active"
                                // to="appointment"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}
                            >
                                <div className='buttonNav'>
                                    <div className='BookNav' style={{ backgroundColor: '#0ea3cc', margin: '5%', borderRadius: '20px', cursor: 'pointer', width: '200px' }}>
                                        <p onClick={handleBook} style={{ textAlign: 'center', fontSize: '14px', paddingTop: '10px', paddingBottom: '10px' }}>Book an Appointment</p>

                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <div className='headerSM'>
                        <button onClick={() => setShowMenu(!showMenu)} className='menuBTN'><CgMenu className='menuIcon' /></button>
                        {showMenu && (
                            <div className="sideDrawer">
                                {/* Mobile Navigation Links */}
                                <div className='homeTsm'>
                                    <Link
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        <p>Home</p>
                                    </Link>
                                </div>
                                <div className='homeTsm'>
                                    <Link
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        <p>About us</p>
                                    </Link>
                                </div>
                                <div className='homeTsm'>
                                    <Link
                                        activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        <p>Contact us</p>
                                    </Link>
                                </div>
                                <div onClick={handleBook} className='bookSM'>
                                    <p className='smBTN'>Book  Appointment</p>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>

            <section onClick={() => setShowMenu(false)} id="home">
                <Home />
            </section>
            <section id="appointment">
                <Appointment />
            </section>
            <section id="about">
                {/* <p>About</p> */}
                <About />
            </section>
            <section id="contact">
                {/* <p>Footer</p> */}
                <Footer />
            </section>

            <button className='TopIcon' style={{ border: 'none', }} onClick={scrollToTop} ><BsArrowUpCircleFill /></button>

        </>
    )
}

export default Navbar

{/* <ul> */ }
{/* <li>
                                    <Link
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                       Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        About
                                    </Link>
                                </li> */}
{/* </ul> */ }