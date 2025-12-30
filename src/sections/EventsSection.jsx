import styles from "./EventsSection.module.css";
import OnGoingEvents from "../components/OngoingEvents";
import PastEvents from "../components/PastEvents";
import { Title } from "../elements/Title";
import { motion } from "framer-motion";

export const EventsSection = () => {
  return (
    <motion.div
    id="eventSection"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={styles.wrapper}
    >
      <Title>Our Events</Title>
      <div>
        <PastEvents />
        <OnGoingEvents />
      </div>
    </motion.div>
  );
};
