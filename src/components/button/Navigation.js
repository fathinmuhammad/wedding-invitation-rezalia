import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGifts } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"; // Import motion dari framer-motion

const Navigation = () => {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bottom-nav">
      <motion.div
        className="nav-item"
        onClick={() => handleScrollToSection("details")}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
         <FontAwesomeIcon icon={faEnvelope} className="me-2" />
      </motion.div>
      <motion.div
        className="nav-item"
        onClick={() => handleScrollToSection("bridge")}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faHeart} className="me-2" />
      </motion.div>
      <motion.div
        className="nav-item"
        onClick={() => handleScrollToSection("weddingDate")}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
      </motion.div>
      <motion.div
        className="nav-item"
        onClick={() => handleScrollToSection("giftSection")}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faGifts} className="me-2" />
      </motion.div>
      <motion.div
        className="nav-item"
        onClick={() => handleScrollToSection("commentForm")}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faCommentAlt} className="me-2" />
      </motion.div>
    </div>
  );
};

export default Navigation;
