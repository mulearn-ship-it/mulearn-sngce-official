import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { FooterSection } from "../sections/FooterSection";
import { TrophyIcon, BoltIcon } from "@heroicons/react/24/solid";
import styles from "./LeaderboardPage.module.css";

export const LeaderboardPage = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [month, setMonth] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [hoveredUser, setHoveredUser] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        // Get current year and month
        const now = new Date();
        const year = now.getFullYear();
        const monthNum = String(now.getMonth() + 1).padStart(2, "0");
        const currentMonth = `${year}-${monthNum}`;
        setMonth(currentMonth);

        const response = await fetch(
          `https://mulearnsngce-api.vercel.app/api/leaderboard/monthly?month=${currentMonth}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch leaderboard data");
        }

        const data = await response.json();
        
        if (data.success) {
          setLeaderboardData(data.leaderboard);
          setTotalCount(data.count);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const getLevelColor = (level) => {
    const levelNum = parseInt(level.replace("lvl", ""));
    if (levelNum >= 7) return "#5f3dc4";
    if (levelNum >= 5) return "#7950f2";
    if (levelNum >= 3) return "#9775fa";
    return "#b197fc";
  };

  const getRankBadge = (rank) => {
    if (rank === 1) return { icon: "trophy", color: "#FFD700" };
    if (rank === 2) return { icon: "trophy", color: "#C0C0C0" };
    if (rank === 3) return { icon: "trophy", color: "#CD7F32" };
    return { icon: null, color: "transparent" };
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <Navbar />
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <p>Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <Navbar />
        <div className={styles.error}>
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <motion.div
        className={styles.leaderboardContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.header}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.headerWithIcon}
          >
            <TrophyIcon className={styles.titleIcon} />
            Monthly Leaderboard
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {new Date(month + "-01").toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </motion.p>
          <motion.p
            className={styles.count}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Total Participants: <strong>{totalCount}</strong>
          </motion.p>
        </div>

        <motion.div 
          className={styles.tableContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.mobileScrollHint}>
            <span>← Scroll to see more →</span>
          </div>
          <table className={styles.leaderboardTable}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>MUID</th>
                <th>Level</th>
                <th>Karma</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user, index) => {
                const rankBadge = getRankBadge(user.rank);
                return (
                  <motion.tr
                    key={user.id}
                    className={user.rank <= 3 ? styles.topThree : ""}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.02, duration: 0.3 }}
                    onMouseEnter={() => setHoveredUser(user)}
                    onMouseLeave={() => setHoveredUser(null)}
                    onMouseMove={handleMouseMove}
                    style={{ 
                      borderLeftColor: rankBadge.color !== "transparent" ? rankBadge.color : undefined 
                    }}
                  >
                    <td className={styles.rankCell}>
                      <div className={styles.rankBadge}>
                        {rankBadge.icon ? (
                          <TrophyIcon 
                            className={styles.rankIcon} 
                            style={{ color: rankBadge.color }}
                          />
                        ) : (
                          user.rank
                        )}
                      </div>
                    </td>
                    <td className={styles.nameCell}>
                      <strong>{user.name}</strong>
                    </td>
                    <td className={styles.muidCell}>@{user.muid}</td>
                    <td className={styles.levelCell}>
                      <span 
                        className={styles.levelBadge}
                        style={{ backgroundColor: getLevelColor(user.level) }}
                      >
                        {user.level.toUpperCase()}
                      </span>
                    </td>
                    <td className={styles.karmaCell}>
                      <strong>{user.monthlyKarma.toLocaleString()}</strong>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </motion.div>

      {/* Popup Card */}
      <AnimatePresence>
        {hoveredUser && (
          <motion.div
            className={styles.popupCard}
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 100,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.popupHeader}>
              <div 
                className={styles.popupRank}
                style={{ 
                  backgroundColor: getRankBadge(hoveredUser.rank).color !== "transparent" 
                    ? getRankBadge(hoveredUser.rank).color 
                    : "#667eea" 
                }}
              >
                {getRankBadge(hoveredUser.rank).icon ? (
                  <TrophyIcon className={styles.popupRankIcon} />
                ) : (
                  `#${hoveredUser.rank}`
                )}
              </div>
              <h3>{hoveredUser.name}</h3>
            </div>
            
            <div className={styles.popupContent}>
              <div className={styles.popupRow}>
                <span className={styles.popupLabel}>MUID:</span>
                <span className={styles.popupValue}>@{hoveredUser.muid}</span>
              </div>
              
              <div className={styles.popupRow}>
                <span className={styles.popupLabel}>Department:</span>
                <span className={styles.popupValue}>{hoveredUser.department}</span>
              </div>
              
              {hoveredUser.graduationYear && (
                <div className={styles.popupRow}>
                  <span className={styles.popupLabel}>Graduation:</span>
                  <span className={styles.popupValue}>{hoveredUser.graduationYear}</span>
                </div>
              )}
              
              <div className={styles.popupRow}>
                <span className={styles.popupLabel}>Level:</span>
                <span 
                  className={styles.popupLevel}
                  style={{ backgroundColor: getLevelColor(hoveredUser.level) }}
                >
                  {hoveredUser.level.toUpperCase()}
                </span>
              </div>
              
              <div className={styles.popupRow}>
                <span className={styles.popupLabel}>Join Date:</span>
                <span className={styles.popupValue}>
                  {new Date(hoveredUser.joinDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  })}
                </span>
              </div>
              
              <div className={styles.popupKarma}>
                <BoltIcon className={styles.karmaIcon} />
                <span className={styles.karmaAmount}>{hoveredUser.monthlyKarma.toLocaleString()}</span>
                <span className={styles.karmaText}>Monthly Karma</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </div>
  );
};
