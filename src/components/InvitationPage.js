import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/bg.png";

const InvitationPage = ({ onOpen }) => {
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get("to") || "Tamu Undangan";

  return (
    <motion.div
      className="invitation-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img 
        src={bgImage} 
        alt="Couple" 
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
      <h2 className="invitation-title">THE WEDDING OF</h2>
      <h1 className="invitation-couple">Reza & Lia</h1>
      <p className="invitation-text">Kepada Bapak/Ibu/Saudara/i</p>
      <p className="guest-name"><strong>{guestName}</strong></p>
      <p className="invitation-text">Di tempat</p>
      <button className="invitation-button" onClick={onOpen}>
        Buka Undangan
      </button>
      <p className="invitation-footer">
        Mohon maaf apabila ada kesalahan penulisan nama/gelar
      </p>
    </motion.div>
  );
};

export default InvitationPage;
