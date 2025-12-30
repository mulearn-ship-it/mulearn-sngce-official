import { motion } from "framer-motion";
import styles from "./LeadCard.module.css";

export default function LeadCard({ name, role, image }) {
  return (
    <motion.div 
      className={styles.leadCard}
      whileHover={{ 
        y: -8,
        boxShadow: "16px 16px 0px rgba(0, 0, 0, 1)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.leadImg} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
    </motion.div>
  );
};
