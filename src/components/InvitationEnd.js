import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/bg.png";

const InvitationEnd = () => {
  return (
    <div className="invitation-bridge" style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))', // Soft blue gradient
        fontFamily: "'Playfair Display', serif",
        padding: '2rem 1rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        
        <motion.section 
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 10px 30px rgba(135,206,235,0.2)',
            borderRadius: '10px',
            margin: '20px 0',
            background: 'white'
          }}
          className="invitation-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
            <div className="container text-center">

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

              <motion.div
                  className="bg-theme-dark mt-4 p-3 shadow rounded-4 mb-10" // Tambahkan margin bottom untuk memberikan jarak
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
                      marginTop: '5rem'
                  }}
                  >
                  <motion.p
                  className="p-1 mb-3"
                  style={{ 
                    fontSize: "0.95rem", 
                    fontFamily: "'Cairo', sans-serif", 
                    textAlign: "center",                   
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  >
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
                  </motion.p>
              </motion.div>

                <motion.h2 
                className="font-esthetic" 
                style={{ 
                  fontSize: "1rem", 
                  color: '#5F9EA0',
                  fontFamily: "'Poppins', sans-serif",
                  fontStyle: 'italic' 
                }}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7 }}
                >
                Wassalamualaikum Warahmatullahi Wabarakatuh
                </motion.h2>
                <motion.h2 
                className="font-arabic pt-4" 
                style={{ fontSize: "1.35rem", color: '#1762ad', fontFamily: "'Cairo', sans-serif", }}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7 }}
                >
                اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
                </motion.h2>

                <motion.img
                src={bgImage}
                alt="Fathin & Fridha"
                style={{
                    width: '250px',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                }}
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,   
                  ease: "easeInOut"
                }}
            />
               
            </div>
        </motion.section>
    </div>
  );
};

export default InvitationEnd;