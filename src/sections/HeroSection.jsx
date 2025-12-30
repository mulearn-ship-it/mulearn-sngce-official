import styles from "./HeroSection.module.css";
import { Link } from "react-scroll";
import { PrimaryButton, SecondaryButton } from "../elements/Button";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  SparklesIcon,
  AcademicCapIcon,
  UsersIcon
} from "@heroicons/react/24/solid";

const floatingIcons = [
  {
    icon: <RocketLaunchIcon className={styles.icon} />,
    pos: { top: "10%", left: "15%" },
    delay: 0
  },
  {
    icon: <LightBulbIcon className={styles.icon} />,
    pos: { top: "15%", right: "10%" },
    delay: 0.2
  },
  {
    icon: <CodeBracketIcon className={styles.icon} />,
    pos: { bottom: "20%", left: "10%" },
    delay: 0.4
  },
  {
    icon: <SparklesIcon className={styles.icon} />,
    pos: { top: "50%", right: "8%" },
    delay: 0.6
  },
  {
    icon: <AcademicCapIcon className={styles.icon} />,
    pos: { bottom: "30%", right: "15%" },
    delay: 0.3
  },
  {
    icon: <UsersIcon className={styles.icon} />,
    pos: { top: "70%", left: "8%" },
    delay: 0.5
  }
];

export const HeroSection = ({ scrollToTeam }) => {
  return (
    <div id="heroSection" className={styles.heroSection}>
      <div className={styles.backgroundGradient}></div>
      
      <div className={styles.floatingIcons}>
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className={styles.iconBox}
            style={item.pos}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              opacity: {
                repeat: Infinity,
                duration: 3 + i * 0.5,
                ease: "easeInOut"
              },
              scale: {
                duration: 0.5,
                delay: item.delay
              },
              y: {
                repeat: Infinity,
                duration: 4 + i * 0.3,
                ease: "easeInOut"
              }
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SparklesIcon className={styles.badgeIcon} />
          <span>μLearn SNGCE</span>
        </motion.div>

        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Innovation Begins With{" "}
          <span className={styles.highlight}>Curiosity</span>{" "}
          And <span className={styles.highlight}>Community</span>
        </motion.h1>

        <motion.h2 
          className={styles.collegeName}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Sree Narayana Gurukulam College of Engineering
        </motion.h2>

        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          At μLearn SNGCE, we're building more than just skills—we're building
          a culture. A place where students share ideas, take on challenges,
          and learn by doing. Whether it's coding, design, or bold new
          projects, we believe growth happens when creativity and teamwork
          come together.
        </motion.p>

        <motion.div 
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="teamSection" smooth={true} duration={600} offset={-50}>
            <PrimaryButton>Meet our team</PrimaryButton>
          </Link>

          <Link to="eventSection" smooth={true} duration={600} offset={-50}>
            <SecondaryButton>View our Events</SecondaryButton>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
