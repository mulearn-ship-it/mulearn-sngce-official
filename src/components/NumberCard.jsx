import styles from "./NumberCard.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export const NumberCard = ({ number, title, icon, color, index }) => {
  const [isHover, setIsHover] = useState(false);
  
  return (
    <motion.div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      className={styles.card}
      style={{ '--accent-color': color }}
    >
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <div className={styles.number}>{number}+</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.accent}></div>
    </motion.div>
  );
};
