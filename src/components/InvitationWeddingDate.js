import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const InvitationWeddingDate = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    
    const targetDate = new Date("2025-01-26T09:00:00").getTime();
    
    useEffect(() => {
        const timer = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;
    
        if (difference <= 0) {
            clearInterval(timer);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
            setTimeLeft({ days, hours, minutes, seconds });
        }
        }, 1000);
    
        return () => clearInterval(timer);
    }, [targetDate]);

  return (
    <div className="invitation-wedding-date" style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))',
        fontFamily: "'Playfair Display', serif",
        padding: '2rem 1rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
            <section className="invitation-section" 
                // style={{
                //     minHeight: '100vh',
                //     display: 'flex',
                //     flexDirection: 'column',
                //     alignItems: 'center',
                //     boxShadow: '0 10px 30px rgba(135,206,235,0.2)',
                //     borderRadius: '10px',
                //     margin: '20px 0',
                //     background: 'white'
                //   }}
                id="wedding-date">
                        <motion.div 
                        className="flower-frame-top-right flower-top-right" 
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,   
                            ease: "easeInOut"
                        }}
                        ></motion.div>
                        <motion.div 
                        className="flower-frame-top-left flower-top-left" 
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,   
                            ease: "easeInOut"
                        }}
                        ></motion.div>
                        <motion.div 
                        className="flower-frame-bottom-right flower-bottom-right" 
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,   
                            ease: "easeInOut"
                        }}
                        ></motion.div>        
                        <motion.div 
                        className="flower-frame-bottom-left flower-bottom-left"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,   
                            ease: "easeInOut"
                        }}
                        ></motion.div>
                <div className="container text-center">

                    <motion.h2
                    className="font-esthetic py-2 m-0"
                    style={{ 
                        fontSize: '1rem', 
                        fontFamily: "'Poppins', sans-serif", 
                        color: '#1762ad',
                        marginLeft: '1rem',
                        marginRight: '1rem',
                        marginTop: '4rem' 
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    >
                    Allah Subhanahu Wa Ta'ala, berfirman
                    </motion.h2>

                    <motion.div
                    className="bg-theme-dark mt-4 p-3 shadow rounded-4 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                        background: 'rgba(255,255,255,0.95)',
                        borderRadius: '20px',
                        border: '1px solid rgba(135,206,235,0.3)',
                        boxShadow: '0 10px 30px rgba(135,206,235,0.2)',
                        marginLeft: '1rem',
                        marginRight: '1rem',
                    }}
                    >
                         <motion.p
                        className="p-1 mb-3"
                        style={{ fontSize: '0.95rem', color: '#778899', marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem', marginBottom: '1rem' }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        >
                        وَمِنۡ اٰيٰتِهٖۤ اَنۡ خَلَقَ لَكُمۡ مِّنۡ اَنۡفُسِكُمۡ اَزۡوَاجًا لِّتَسۡكُنُوۡۤا اِلَيۡهَا وَجَعَلَ بَيۡنَكُمۡ مَّوَدَّةً وَّرَحۡمَةً  ؕ اِنَّ فِىۡ ذٰ لِكَ لَاٰيٰتٍ لِّقَوۡمٍ يَّتَفَكَّرُوۡنَ
                        </motion.p>
                        <motion.p
                        className="p-1 mb-3"
                        style={{ 
                            fontSize: '0.6rem', 
                            color: '#778899', 
                            textAlign: 'justify', 
                            marginTop: '1rem', 
                            marginLeft: '1rem', 
                            marginRight: '1rem', 
                            marginBottom: '2rem' 
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        >
                        Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
                        </motion.p>
                        <a
                            href="https://quran.com/id/30/21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="save-date-btn"
                        >
                            <button style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '1rem',
                                color: '#1762ad',
                                textShadow: '2px 2px 4px rgba(135, 206, 235, 0.2)',
                                padding: '0.8rem 2rem',
                                background: '#f0f8ff',
                                border: '2px solid #87ceeb',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                marginBottom: '3rem'
                            }}>
                            <span>QS. Ar-Rum: 21</span>
                            </button>
                        </a>
                    </motion.div>

                    <motion.h2 className="font-esthetic py-4 m-0" style={{ fontSize: '2rem', color: '#1762ad', fontFamily: "'Poppins', sans-serif", marginBottom: "0rem" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Momen Bahagia</motion.h2>
    
                    <motion.p className="wedding-date">
                        Minggu, 26 Januari 2025
                    </motion.p>

                    <div
                        className="border rounded-pill shadow py-2 px-3 mt-2 mb-4"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(7, auto)",
                            gap: "0.3rem",
                            alignItems: "center",
                            justifyContent: "center", 
                            margin: '0.2rem',
                            // backgroundColor: '#f0f8ff',
                            // boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                        }}
                    >
                        {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                            <React.Fragment key={unit}>
                                {index > 0 && (
                                    <span style={{ fontSize: "1.4rem", color: "#1762ad", fontWeight: "bold" }}>
                                        :
                                    </span>
                                )}
                                <div
                                    className="text-center d-flex flex-column justify-content-center align-items-center"
                                    style={{
                                        border: '2px solid #87ceeb',
                                        backgroundColor: 'rgba(135, 206, 235, 0.2)',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '6px',
                                        // boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <motion.h2
                                        className="m-0"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        style={{
                                            fontSize: "1rem",
                                            fontFamily: "'Poppins', sans-serif",
                                            color: "#1762ad",
                                            fontWeight: "bold",
                                            letterSpacing: '1px',
                                        }}
                                    >
                                        {timeLeft[unit]}
                                    </motion.h2>
                                    <small
                                        style={{
                                            fontSize: "0.8rem",
                                            fontFamily: "'Poppins', sans-serif",
                                            color: "#778899",
                                            fontWeight: '500',
                                        }}
                                    >
                                        {unit === 'days' ? 'Hari' : unit === 'hours' ? 'Jam' : unit === 'minutes' ? 'Menit' : 'Detik'}
                                    </small>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>


    
                    <motion.p className="py-2 m-0" 
                        style={{ 
                                fontSize: '0.95rem', 
                                fontFamily: "'Poppins', sans-serif", 
                                marginBottom:'0.8rem',
                                marginLeft: '1rem',
                                marginRight: '1rem', 
                            }} 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1 }}>
                            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, 
                            insyaAllah kami akan menyelenggarakan acara:
                    </motion.p>
    
    
                    <div className="overflow-x-hidden">
                        <div className="py-2" data-aos="fade-right" data-aos-duration="1500">
                            <motion.h2 className="font-esthetic m-0 py-2" 
                                    style={{ 
                                        fontSize: '2rem', 
                                        color: '#1762ad', 
                                        fontFamily: "'Poppins', sans-serif", 
                                        marginTop: '0rem', 
                                        marginBottom:'0rem' 
                                    }} 
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 1 }}>
                                        Akad
                            </motion.h2>
                            <p style={{ fontSize: '1rem', fontFamily: "'Poppins', sans-serif", marginTop: '0rem', marginBottom:'0rem' }}>Pukul 08.00 WIB - Selesai</p>
                        </div>
    
                        <div className="py-2" data-aos="fade-left" data-aos-duration="1500">
                            <motion.h2 className="font-esthetic m-0 py-2" style={{ fontSize: '2rem', color: '#1762ad', fontFamily: "'Poppins', sans-serif", marginTop: '0rem', marginBottom:'0rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Resepsi</motion.h2>
                            <p style={{ fontSize: '1rem', fontFamily: "'Poppins', sans-serif", marginTop: '0rem', marginBottom:'1rem' }}>Pukul 09.00 WIB - Selesai</p>
                        </div>
                    </div>
    
                    <div className="py-2">
                        <a 
                            href="https://maps.app.goo.gl/RjiKS3FcRTNaPqXP9" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline-light btn-sm rounded-pill shadow mb-2 px-3" 
                            style={{ background: '#B0E0E6' }}>
                                <button style={{
                                    background: '#1762ad',
                                    color: 'white',
                                    padding: '0.8rem 2rem',
                                    border: 'none',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 3px 10px rgba(135,206,235,0.2)'
                                    }}
                                > 
                                    <FontAwesomeIcon icon={faMapLocationDot} className="me-2" style={{marginRight: '0.3rem'}} /> 
                                    Lihat Google Maps
                                </button>
                        </a>                        
                    </div>
                    <br/>
                    <div className="text-center mb-4"
                        style={{
                            marginBottom:'3rem',
                            marginLeft: '1rem',
                            marginRight: '1rem',
                        }}
                    >
                        <motion.small 
                            style={{
                                fontSize: '1rem',
                                fontFamily: "'Poppins', sans-serif",
                                textAlign: 'center',
                                }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            whileHover={{ scale: 1.05 }}>
                                    Kp Sawagi, Ds Bolang, Kec Malingping, Lebak Banten
                        </motion.small>
                    </div>
                </div>
            </section>
    </div>
  );
};

export default InvitationWeddingDate;