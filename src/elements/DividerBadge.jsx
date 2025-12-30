import { motion } from "framer-motion";
import styles from "./DividerBadge.module.css";

const text = "A Gtech initivative"

export const DividerBadge = () => {
  return (
    <motion.div
      className={styles.badgeContainer}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      <div className={styles.textCircle}>
        {text.split("").map((char, i) => (
          <span
            key={i}
            style={{
              transform: `rotate(${
                (i * 360) / text.length
              }deg) translateX(60px)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
