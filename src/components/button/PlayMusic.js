import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const PlayMusic = ({ handleToggleMusic, isPlaying }) => {
  return (
    <motion.button
      onClick={handleToggleMusic}
      className={`play-music-btn ${isPlaying ? "playing" : "paused"}`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {isPlaying ? (
        <FontAwesomeIcon icon={faPause} className="me-2" />
      ) : (
        <FontAwesomeIcon icon={faPlay} className="me-2" />
      )}
    </motion.button>
  );
};

export default PlayMusic;