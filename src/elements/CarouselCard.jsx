import { motion } from "framer-motion";
import styles from "./CarouselCard.module.css";

export const CarouselCard = ({ events }) => {
  return (
    <div className={styles.carousel}>
      <motion.div
        className={styles.track}
        animate={{ x: ["0%", "-50%", "0%"] }} // goes left → back right
        transition={{
          ease: "linear",
          duration: 30,   // adjust speed
          repeat: Infinity,
        }}
      >
        {events.map((event, idx) => (
          <div key={idx} className={styles.card}>
            <img src={event.poster} alt={event.title} />
            <p className={styles.caption}>{event.title}</p>
          </div>
        ))}
        {/* duplicate once so both directions have content */}
        {events.map((event, idx) => (
          <div key={`dup-${idx}`} className={styles.card}>
            <img src={event.poster} alt={event.title} />
            <p className={styles.caption}>{event.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
