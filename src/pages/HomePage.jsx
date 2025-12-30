import { Navbar } from "../components/Navbar";
import { HeroSection } from "../sections/HeroSection";
import { Divider } from "../components/Divider";
import { NumbersSection } from "../sections/NumbersSection";
import { AboutSection } from "../sections/AboutSection";
import { TeamSection } from "../sections/TeamSection";
import { EventsSection } from "../sections/EventsSection";
import { Mulearn } from "../sections/WhatisMulearn";
import { FooterSection } from "../sections/FooterSection";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo/Logo.svg";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img 
              src={logo} 
              alt="μLearn Logo" 
              className="loader-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 1],
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
            />
            <motion.div 
              className="progress-bar"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div 
                className="fill"
                animate={{ 
                  scaleX: [0, 1],
                }}
                transition={{ 
                  duration: 1.7,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Loading μLearn...
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ width: '100%', margin: 0, padding: 0 }}
          >
            <Navbar />
            <HeroSection />
            {/* <Divider /> */}
            <Mulearn />
            <AboutSection />
            <NumbersSection />
            <TeamSection />
            <EventsSection />
            <FooterSection />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
