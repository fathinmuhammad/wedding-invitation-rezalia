import React from "react";
import { motion } from "framer-motion";
import cowok from "../assets/images/cowok.png";
import cewek from "../assets/images/cewek.png";

const InvitationBridge = () => {
  return (
    <div className="invitation-wedding-date">
        
    <motion.section
      id="bride"
      className="invitation-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 10px 30px rgba(135,206,235,0.2)',
        borderRadius: '10px',
        background: 'white'
      }}
    >

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


        <motion.h2
          className="font-arabic py-4 m-0"
          style={{ 
            fontSize: "1.35rem",
            color: '#1762ad',
            fontFamily: "'Cairo', sans-serif",
            fontWeight: 'bold',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            textAlign: 'center',
            marginBottom: '0rem',
            marginTop: '3rem'
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.h2>

        <motion.h2
          className="font-esthetic py-4 m-0"
          style={{ 
            fontSize: "0.7rem",
            color: '#5F9EA0',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'bold',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            textAlign: 'center',
            fontStyle: 'italic',
            marginBottom: '0rem'
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Assalamualaikum Warahmatullahi Wabarakatuh
        </motion.h2>

        <motion.p
          className="pb-4 m-0"
          style={{ 
            fontSize: "0.7rem",
            color: '#778899',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'bold',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            textAlign: 'justify',
            marginLeft: '1rem',
            marginRight: '1rem',
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan menghadiri acara pernikahan kami:
        </motion.p>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
           <motion.img
              src={cowok}
              alt="cowok"
              className="rounded-circle border border-3 shadow my-4 mx-auto"
              style={{
                width: "250px",
                objectFit: "cover",
                margin: '20px 0',
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.5,   
                ease: "easeInOut"
              }}
            />
            <motion.h2
              className="font-esthetic m-0"
              style={{ 
                fontSize: "3rem",
                color: '#1762ad',
                fontFamily: "'Tangerine', serif",
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginBottom: '0rem',
                marginTop: '0rem'
              }}
            >
              Reza Andrian
            </motion.h2>
            <motion.p
              className="mt-3 mb-1"
              style={{ 
                fontSize: "1rem",
                color: '#5F9EA0',
                fontFamily: "'Poppins', sans-serif",
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginTop: '0rem',
                fontWeight: 'bold',
                marginBottom: '0rem'
              }}
            >
              Putra pertama
            </motion.p>
            <motion.p 
              className="mb-0"
              style={{
                color: '#778899', 
                fontFamily: "'Poppins', sans-serif", 
                textShadow: '0 1px 2px rgba(0,0,0,0.1)', 
                marginTop: "0rem",                 
                fontSize: '0.6rem',
              }}
            >
              Bapak Andrizal Latif dan Ibu Sartiamah
            </motion.p>

            <motion.h2
              className="font-esthetic my-4"
              style={{ 
                fontSize: "2rem",
                color: '#4682B4',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 'bold',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginBottom: '0rem',
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              &amp;
            </motion.h2>

            <motion.img
              src={cewek}
              alt="cewek"
              style={{
                width: "250px",
                objectFit: "cover",
                margin: '20px 0',
                
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.5,   
                ease: "easeInOut"
              }}
            />
            <motion.h2
              className="m-0"
              style={{ 
                fontSize: "3rem",
                color: '#1762ad',
                fontFamily: "'Tangerine', serif",
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginBottom: '0rem',
                marginTop: '0rem'
              }}
            >
              Novelia unes
            </motion.h2>
            <motion.p
              style={{ 
                fontSize: "1rem",
                color: '#5F9EA0',
                fontFamily: "'Poppins', sans-serif",
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginTop: '0rem',
                fontWeight: 'bold',
                marginBottom: '0rem'
              }}
            >
              Putri pertama
            </motion.p>
            <motion.p 
              style={{
                color: '#778899', 
                fontFamily: "'Poppins', sans-serif", 
                textShadow: '0 1px 2px rgba(0,0,0,0.1)', 
                marginTop: "0rem", 
                marginBottom: '6rem',
                fontSize: '0.6rem',
              }}
            >
              Bapak (Alm) Nurokhman dan Ibu (Alm) Maryati
            </motion.p>
          </motion.div>
        {/* </div> */}
      {/* </motion.div> */}
    </motion.section>
    </div>
  );
};

export default InvitationBridge;