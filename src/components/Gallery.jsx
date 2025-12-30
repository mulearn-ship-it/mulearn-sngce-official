import React from "react";
import styles from "./Gallery.module.css";

// Example posters (replace with your actual imports)
import poster1 from "./../assets/images/gallery1.jpg";
import poster2 from "./../assets/images/gallery2.jpg";
import poster3 from "./../assets/images/gallery3.jpg";

const galleryItems = [
  {
    title: "Hackathon Night",
    poster: poster1,
    sticker: "NEW",
  },
  {
    title: "Design Meetup",
    poster: poster2,
    sticker: "HOT",
  },
  {
    title: "AI Bootcamp",
    poster: poster3,
    sticker: "ARCHIVE",
  },
];

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      {galleryItems.map((item, index) => (
        <div key={index} className={styles.card}>
          <img src={item.poster} alt={item.title} />
          <div className={styles.caption}>{item.title}</div>
          {item.sticker && (
            <div className={styles.sticker}>{item.sticker}</div>
          )}
        </div>
      ))}
    </div>
  );
};

