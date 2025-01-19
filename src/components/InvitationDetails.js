import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assets/images/bg.png";

const InvitationDetails = () => {
  return (
    <motion.div
      className="invitation-details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.section
        id="home"
        className="invitation-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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

        <motion.h1 className="title" whileHover={{ scale: 1.05 }}>
          Wedding Invitation
        </motion.h1>
        <motion.img
          src={bgImage}
          alt="Reza & Lia"
          className="profile-img"
          initial={{ scale: 0 }} 
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.5,   
            ease: "easeInOut"
          }}
        />
        <motion.h2 className="invitation-couple" whileHover={{ scale: 1.05 }}>
          Reza &amp; Lia
        </motion.h2>
        <motion.p className="wedding-date">
          Minggu, 26 Januari 2025
        </motion.p>
        <a
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M3I1aHRlOTdlYTM4NzNldGpxdnZmM2duaG8gZmF0aGlubXVoYW1tYWQ0MEBt&tmsrc=fathinmuhammad40%40gmail.com"
          target="_blank"
          rel="noreferrer"
          className="save-date-btn"
        >
          <button>
            <FontAwesomeIcon icon={faCalendarCheck} className="icon" />{" "}
            <span>Save The Date</span>
          </button>
        </a>
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="mouse">
            <motion.div
              className="scroll-animation"
              animate={{ y: [0, 20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.p className="scroll-text">Scroll Down</motion.p>
      </motion.section>
    </motion.div>
  );
};

export default InvitationDetails;