import { motion } from "framer-motion";
import styles from "./Divider.module.css";
import { MuIcon } from "../elements/Mu";
import { DividerBadge } from "../elements/DividerBadge";

export const Divider = () => {
  return (
    <div className={styles.divider}>
      <hr className={styles.line} />
      <motion.div
        className={styles.iconWrapper}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      >
        <bold>μ</bold>
      </motion.div>
      <hr className={styles.line} />
    </div>
  );
};
