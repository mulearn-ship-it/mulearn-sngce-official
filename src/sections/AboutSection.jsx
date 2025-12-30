import {
  RegularButton,
} from "../elements/Button";
import styles from "./AboutSection.module.css";
import { motion } from "framer-motion";
import { Title } from "../elements/Title";
import poster from "../assets/images/posters/poster8.jpeg";
import { 
  HeartIcon, 
  RocketLaunchIcon, 
  UserGroupIcon 
} from "@heroicons/react/24/solid";

export const AboutSection = () => {
  const highlights = [
    {
      icon: <HeartIcon className={styles.highlightIcon} />,
      text: "Student-Led Community"
    },
    {
      icon: <RocketLaunchIcon className={styles.highlightIcon} />,
      text: "Hands-On Learning"
    },
    {
      icon: <UserGroupIcon className={styles.highlightIcon} />,
      text: "Peer Collaboration"
    }
  ];

  return (
    <div id="aboutSection" className={styles.aboutSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Title>About us</Title>
        
        <div className={styles.aboutBox}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.textContent}>
              <p className={styles.paragraph}>
                At μLearn SNGCE, we believe learning should be more than just
                another task on your to-do list — it should be exciting, inspiring,
                and fun. We are a student-led community that thrives on curiosity,
                collaboration, and creativity, giving everyone the chance to explore
                their interests while building skills that truly matter.
              </p>
              
              <p className={styles.paragraph}>
                Through coding sprints, design challenges, and peer-learning
                sessions, we create opportunities to grow together in a supportive
                environment. More than just technical skills, we focus on building
                confidence, meaningful connections, and a culture of teamwork.
                Whether you're just starting your journey or ready to dive into bold
                new ideas, μLearn is the space where passion meets possibility.
              </p>
            </div>

            <div className={styles.highlights}>
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.highlightItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className={styles.highlightIconWrapper}>
                    {item.icon}
                  </div>
                  <span className={styles.highlightText}>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="https://discord.gg/Gnz3ejSR"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonLink}
              >
                <RegularButton>Join Our Discord</RegularButton>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <img src={poster} alt="μLearn SNGCE Event" className={styles.image} />
              <div className={styles.imageOverlay}></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
