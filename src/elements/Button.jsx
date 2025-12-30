import { useState } from "react";
import styles from "./Button.module.css";
import { motion } from "framer-motion";

export const PrimaryButton = ({ children, ...rest }) => {
  return (
    <motion.button
      {...rest}
      whileHover={{
        boxShadow: "none",
        x: 4,
        y: 4,
      }}
      transition={{
        duration: 0.1,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={styles.primaryButton}
    >
      {children}
    </motion.button>
  );
};

export const SecondaryButton = ({ children, ...rest }) => {
  return (
    <motion.button
      {...rest}
      whileHover={{
        boxShadow: "none",
        x: 4,
        y: 4,
      }}
      transition={{
        duration: 0.1,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={styles.secondaryButton}
    >
      {children}
    </motion.button>
  );
};

export const RegularButton = ({ children, ...rest }) => {
  return (
    <motion.button
      {...rest}
      whileHover={{
        boxShadow: "none",
        x: 4,
        y: 4,
      }}
      transition={{
        duration: 0.1,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={styles.regularButton}
    >
      {children}
    </motion.button>
  );
};

export const CTAButton = ({ children, ...rest }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.button
      onMouseEnter={(e) => setIsHover(true)}
      onMouseLeave={(e) => setIsHover(false)}
      className={styles.CTAButton}
      whileHover={{
        x: 4,
        y: 4,
        boxShadow: "none",
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <motion.span
        className={styles.fill}
        animate={{
          scaleX: isHover ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      <motion.span className={styles.text}>{children}</motion.span>
    </motion.button>
  );
};
