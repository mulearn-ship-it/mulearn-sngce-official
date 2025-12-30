import { useState } from "react";
import { motion } from "framer-motion";
import { NumberCard } from "../components/NumberCard";
import { Title } from "../elements/Title";
import styles from "./NumbersSection.module.css";
import { 
  UserGroupIcon, 
  AcademicCapIcon, 
  SparklesIcon, 
  FireIcon 
} from "@heroicons/react/24/solid";

export const NumbersSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const numbers = [
    { 
      number: 390, 
      title: "Students Enrolled", 
      color: "var(--danger)",
      icon: <UserGroupIcon className={styles.icon} />
    },
    { 
      number: 25, 
      title: "Learning Circles", 
      color: "var(--info)",
      icon: <AcademicCapIcon className={styles.icon} />
    },
    { 
      number: 5, 
      title: "Interest Groups", 
      color: "var(--success)",
      icon: <SparklesIcon className={styles.icon} />
    },
    { 
      number: "306k", 
      title: "Karma Mined", 
      color: "var(--warning)",
      icon: <FireIcon className={styles.icon} />
    },
  ];

  return (
    <div className={styles.numbersSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{once: true, amount: 0.2}}
      >
        <Title>Our Impact in Numbers</Title>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{once: true}}
        >
          Building a thriving community of learners and innovators
        </motion.p>

        <div className={styles.cards}>
          {numbers.map((item, index) => (
            <NumberCard 
              key={index} 
              number={item.number} 
              title={item.title}
              icon={item.icon}
              color={item.color}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
