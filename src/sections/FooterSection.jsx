import styles from "./FooterSection.module.css";
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../elements/Icons";
import { motion } from "framer-motion";

export const FooterSection = () => {
  const socials = [
    { name: "discord", link: "https://discord.gg/Gnz3ejSR", src: DiscordIcon },
    {
      name: "github",
      link: "https://github.com/gtech-mulearn",
      src: GithubIcon,
    },
    {
      name: "linkedin",
      link: "http://www.linkedin.com/company/gtechmulearn/",
      src: LinkedInIcon,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/mulearn_sngce/",
      src: InstagramIcon,
    },
  ];
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.content}>
            <div>
              <h1>MULEARN SNG</h1>
              <h5>
                μLearn is a student-led community dedicated to curiosity,
                collaboration, and creativity. Join us to explore new ideas,
                learn by doing, and connect with like-minded peers.
              </h5>
            </div>
            <div className={styles.socials}>
              {socials.map((social, index) => {
                const Icon = social.src;
                return (
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                    key={index}
                  >
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
                    >
                      <Icon className="text-xl" />
                    </motion.button>
                  </a>
                );
              })}
            </div>
          </div>
          <div className={styles.links}>
            <h3>Quick Links</h3>

            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Gallery</li>
              <li>Events</li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3>Community</h3>
            <ul>
              <li>Join Discord</li>
              <li>Workshops</li>
              <li>Events</li>
              <li>Mentorship</li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3>Resources</h3>
            <ul>
              <li>Leanring Materials</li>
              <li>Project Ideas</li>
              <li>Tech Talks</li>
              <li>Career Guidance</li>
            </ul>
          </div>
        </div>
        <div className={styles.credit}>
          <hr />
          <p>© 2025 µLearn SNGCE. Made by Aadhil Paul CT</p>
        </div>
      </footer>
    </>
  );
};
