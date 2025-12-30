import { motion } from "framer-motion";
import styles from "./CTASection.module.css";
import { CTAButton } from "../elements/Button";

export const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <motion.div
        className={styles.ctaCard}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{once: true}}
      >
        <h2 className={styles.ctaTitle}>
          Ready to start your learning journey?
        </h2>
        <h6 className={styles.ctaText}>
          Take the first step today and unlock your potential.
        </h6>
        <CTAButton>Get Started</CTAButton>
      </motion.div>
    </section>
  );
}
