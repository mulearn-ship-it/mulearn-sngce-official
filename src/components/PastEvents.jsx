import { pastEvents } from "../assets/data/pastEvents"
import styles from './PastEvents.module.css'
import { CarouselCard } from "../elements/CarouselCard"

const PastEvents = () => {
    return (
      <div>
        <h2 className={styles.sectionTitle}>Past Events</h2>
        <div className={styles.carousel}>
          <CarouselCard events={pastEvents} />
        </div>
      </div>
    )
}

export default PastEvents;