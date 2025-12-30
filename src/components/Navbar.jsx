import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarItem } from "../elements/NavbarItem";
import { RegularButton } from "../elements/Button";
import { Logo } from "../elements/Logo";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarInner}>
        <RouterLink to="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Logo />
        </RouterLink>

        {/* Desktop Nav */}
        <div className={styles.navbarItems}>
          {isHomePage ? (
            <>
              <Link to="heroSection" smooth={true} duration={600} offset={-50}>
                <NavbarItem>Home</NavbarItem>
              </Link>
              <Link to="aboutSection" smooth={true} duration={600} offset={-50}>
                <NavbarItem>About Us</NavbarItem>
              </Link>
              <Link to="teamSection" smooth={true} duration={600} offset={-50}>
                <NavbarItem>Meet the team</NavbarItem>
              </Link>
            </>
          ) : (
            <>
              <RouterLink to="/" style={{ textDecoration: "none" }}>
                <NavbarItem>Home</NavbarItem>
              </RouterLink>
              <RouterLink to="/" style={{ textDecoration: "none" }}>
                <NavbarItem>About Us</NavbarItem>
              </RouterLink>
              <RouterLink to="/" style={{ textDecoration: "none" }}>
                <NavbarItem>Meet the team</NavbarItem>
              </RouterLink>
            </>
          )}
          
          <RouterLink to="/leaderboard" style={{ textDecoration: "none" }}>
            <NavbarItem>Leaderboard</NavbarItem>
          </RouterLink>

          <NavbarItem>Contact Us</NavbarItem>
        </div>

        <div className={styles.joinBtn}>
          <a
            href="https://mulearn.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <RegularButton>Join μLearn</RegularButton>
          </a>
        </div>

        {/* Right side: Join button + hamburger (mobile) */}
        {/* Hamburger mobile */}
        <div className={styles.hamburgerWrapper}>
          <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div>
              <div className={styles.menuHeader}>
                <RouterLink to="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                  <Logo />
                </RouterLink>
                <button
                  className={styles.closeBtn}
                  onClick={() => setMenuOpen(false)}
                >
                  ✕
                </button>
              </div>

              <div className={styles.mobileLinks}>
                {isHomePage ? (
                  <>
                    <Link
                      onClick={() => setMenuOpen(false)}
                      to="heroSection"
                      smooth={true}
                      duration={600}
                      offset={-50}
                    >
                      <NavbarItem>Home</NavbarItem>
                    </Link>
                    <Link
                      onClick={() => setMenuOpen(false)}
                      to="aboutSection"
                      smooth={true}
                      duration={600}
                      offset={-50}
                    >
                      <NavbarItem>About Us</NavbarItem>
                    </Link>
                    <Link
                      onClick={() => setMenuOpen(false)}
                      to="teamSection"
                      smooth={true}
                      duration={600}
                      offset={-50}
                    >
                      <NavbarItem>Meet the team</NavbarItem>
                    </Link>
                  </>
                ) : (
                  <>
                    <RouterLink 
                      to="/" 
                      onClick={() => setMenuOpen(false)}
                      style={{ textDecoration: "none" }}
                    >
                      <NavbarItem>Home</NavbarItem>
                    </RouterLink>
                    <RouterLink 
                      to="/" 
                      onClick={() => setMenuOpen(false)}
                      style={{ textDecoration: "none" }}
                    >
                      <NavbarItem>About Us</NavbarItem>
                    </RouterLink>
                    <RouterLink 
                      to="/" 
                      onClick={() => setMenuOpen(false)}
                      style={{ textDecoration: "none" }}
                    >
                      <NavbarItem>Meet the team</NavbarItem>
                    </RouterLink>
                  </>
                )}
                
                <RouterLink 
                  to="/leaderboard" 
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <NavbarItem>Leaderboard</NavbarItem>
                </RouterLink>

                <NavbarItem>Contact Us</NavbarItem>
              </div>
            </div>

            <div className={styles.mobileJoinButton}>
              <a
                href="https://mulearn.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <RegularButton>Join μLearn</RegularButton>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
