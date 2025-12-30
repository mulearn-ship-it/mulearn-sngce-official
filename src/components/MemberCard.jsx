import React from "react";
import { motion } from "framer-motion";
import styles from "./MemberCard.module.css";

export default function MemberCard({ name, role, image }) {
  return (
    <motion.article 
      className={styles.card} 
      aria-label={`${name} — ${role}`}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className={styles.mediaWrapper}>
        <img src={image} alt={`${name} profile`} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.role}>{role}</p>
      </div>
    </motion.article>
  );
}
