import React from 'react'
import './about.css'
import { useRef, useState } from "react";
import Api from "./DiseaseApi";
import SliderPage from './SliderPage';
import { useNavigate } from 'react-router-dom';

// import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import { FcOk } from "react-icons/fc";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";


function About() {

    const [slideBegOrNot, handleSlideByState] = useState({
        isFirst: true,
        isLast: false,
    });

    const [id, setId] = useState('');
    const [course, setCourse] = useState('');


    const handleName = (name) => {
        console.log("name:-  ", name);
        const course = Api.find((course) => course.name === (name));
        console.log(course);
        setId(name)
        setCourse(course)

    }

    const SlideRef = useRef();

    const handleNext = () => {
        SlideRef.current.swiper.slideNext();
    };

    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev();
    };

    const onSlideChange = (swiper) => {
        handleSlideByState({
            isFirst: swiper.isBeginning,
            isLast: swiper.isEnd,
        });
    };

    const { isLast, isFirst } = slideBegOrNot;

    const navigate = useNavigate();

    const handleBook=()=>{
        navigate('/slot')
    }

    return (
        <>
            <div className='about'>
                

                <div className='aboutMain'>
                    <h2 style={{ textAlign: 'center' }}>What is Naturopathy?</h2>
                    <p style={{ textAlign: 'center', lineHeight: '25px' }}>Naturopathy is a holistic healthcare system that emphasizes the bodd's inherent healing abilities and
                        the promotion of natural remedies and lifestyle adjustments. It combines traditional healing
                        practices with modern scientific knowledge to address the root causes of health issues and restore
                        balance to the body, mind, and spirit. Naturopathy focuses on individualized treatments and aims to
                        support the body's natural healing processes.</p>
                </div>

                {/*  ================================================================================================ */}
                <div className='swiperConatiner'>
                    <div className=''>
                        <BsArrowLeftCircleFill
                            className={'arrowSy'}
                            onClick={handlePrev}
                            fontSize="small"
                        />
                    </div>
                    <Swiper
                        // slidesPerView={1}
                        // spaceBetween={0 }
                        className={" font-medium text-lg"}
                        ref={SlideRef}
                        onSlideChange={onSlideChange}
                        pagination={{
                            el: ".swiper-paginations",
                            type: "fraction",
                        }}
                        navigation={false}
                        modules={[Pagination, Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            550: {
                                slidesPerView: 1.5,
                            },
                            700: {
                                slidesPerView: 2,
                            },
                            900: {
                                slidesPerView: 2.5,
                            },
                            1050: {
                                slidesPerView: 3,
                            },
                            1350: {
                                slidesPerView: 4,
                            },
                            1800: {
                                slidesPerView: 4.5,
                            },
                            2000: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {Api.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <div className='swiperBtn'>
                                        <button className='BTN' style={{ padding: 'none', border: 'none', backgroundColor: 'Transparent', }} onClick={() => handleName(item.name)}> {item.name}</button>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div className="">
                        <BsArrowRightCircleFill
                            fontSize="small"
                            className={'arrowSy'}
                            onClick={handleNext}
                        />
                    </div>
                </div>
                {course ? (
                    <div>
                        <SliderPage key={course.id}
                            name={course.name}
                            duration={course.duration}
                            info={course.info} />
                    </div>
                ) : (
                    <div className='sliderP'>
                        <div className='sliderCnt'>
                            <div className='imageSl'>
                                <img src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/nephro.png" alt="..." className='sliderImage' />

                            </div>
                            <div>
                                <div className='description'>
                                    <h3>Personalized Wellness Assessment</h3>
                                    <p>Our naturopathic consultants will conduct a comprehensive assessment of your health and lifestyle to gain a thorough understanding of your unique needs and concerns. Through in-depth discussions and analysis, we will identify potential imbalances and develop a personalized wellness plan tailored to your specific requirements.</p>
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
                                            <p onClick={handleBook} style={{ textAlign: 'center',  paddingTop: '10px', paddingBottom: '10px' }}>Book an Appointment</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                )}
            </div>
        </>
    )
}

export default About