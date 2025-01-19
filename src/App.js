import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import InvitationDetails from "./components/InvitationDetails";
import GiftSection from "./components/GiftSection";
import CommentForm from "./components/CommentForm";
import InvitationPage from "./components/InvitationPage";
import InvitationBridge from "./components/InvitationBridge";
import InvitationWeddingDate from "./components/InvitationWeddingDate";
import InvitationGalery from "./components/InvitationGalery";
import InvitationEnd from "./components/InvitationEnd";
import Navigation from "./components/button/Navigation";
import PlayMusic from "./components/button/PlayMusic";
import sound from "../src/assets/music/sound.mp3";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(sound));

  useEffect(() => {
    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
      setTimeout(() => {
        audioRef.current.play().catch((error) => console.error("Audio playback error:", error));
        setIsPlaying(true);
      }, 1000); // Tunda sebentar sebelum memutar ulang
    });
  }, []);

  const handleOpen = () => {
    setIsOpen(true);

    const audio = audioRef.current;
    audio.play().catch((error) => console.error("Audio playback error:", error));
    setIsPlaying(true);

    setTimeout(() => {
      const detailsElement = document.getElementById("details");
      if (detailsElement) {
        detailsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleToggleMusic = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play().catch((error) => console.error("Audio playback error:", error));
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ overflowY: isOpen ? "auto" : "hidden" }}
    >
      <InvitationPage onOpen={handleOpen} />

      {isOpen && (
        <>
          <div id="details">
            <InvitationDetails />
          </div>
          <div id="bridge">
            <InvitationBridge />
          </div>
          <div id="weddingDate">
            <InvitationWeddingDate />
          </div>
          <InvitationGalery />
          <div id="giftSection">
            <GiftSection />
          </div>
          <div id="commentForm">
            <CommentForm />
          </div>
          <InvitationEnd />
          <Navigation />
          <PlayMusic handleToggleMusic={handleToggleMusic} isPlaying={isPlaying} />
        </>
      )}
    </motion.div>
  );
}

export default App;