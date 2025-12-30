import styles from "./EventCard.module.css";
import { motion } from "framer-motion";

export const EventCard = ({
  title,
  subtitle,
  date,
  mode,
  duration,
  certificate,
  poster,
  registerLink,
  ongoing,
  contacts,
}) => {
  return (
    <div className={styles.eventCard}>
      {certificate && (
        <div className={styles.sticker}>Certificate Provided</div>
      )}

      {/* Poster */}
      <div className={styles.eventPoster}>
        <img src={poster} alt={title} />
      </div>

      {/* Info */}
      <div className={styles.eventInfo}>
        <h2 className={styles.eventTitle}>{title}</h2>
        <p className={styles.eventSubtitle}>{subtitle}</p>

        <div className={styles.eventDetails}>
          <p>
            <strong>{date}</strong>
          </p>
          <p>Mode: {mode}</p>
          <p>Time Commitment: {duration}</p>
        </div>

        {/* Actions */}
        <div className={styles.eventActions}>
          {registerLink ? (
            ongoing ? (
              <button className={`${styles.btn} ${styles.disabled}`} disabled>
                Registration Closed
              </button>
            ) : (
              <a href={registerLink} target="_blank" rel="noreferrer">
                <motion.button
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
                  className={styles.btn}
                >
                  Register Now
                </motion.button>
              </a>
            )
          ) : null}

          <div className={styles.eventContacts}>
            <p className={styles.eventContactTitle}>For Queries:</p>
            {contacts.map((c, i) => (
              <p key={i}>
                <u>
                  {c.name}: <span>{c.phone}</span>
                </u>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
