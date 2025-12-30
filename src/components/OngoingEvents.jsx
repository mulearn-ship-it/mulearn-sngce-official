import { ongoingEvents } from "../assets/data/ongoinEvents";
import { EventCard } from "../elements/EventCard";
import styles from "./OngoingEvents.module.css";

const UpcomingEvents = () => {
  return (
    <div className={styles.ongoing}>
      <h1 className={styles.heading}>Ongoing Events</h1>
      <div className={styles.cards}>
        {ongoingEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
