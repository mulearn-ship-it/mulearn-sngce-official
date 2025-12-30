import styles from './WhatisMulearn.module.css'
import { motion } from 'framer-motion'
import { PlayCircleIcon, SparklesIcon, AcademicCapIcon, UsersIcon } from '@heroicons/react/24/solid'

export const Mulearn = () => {
  const features = [
    {
      icon: <SparklesIcon className={styles.featureIcon} />,
      title: "Learn by Doing",
      description: "Hands-on projects and real-world challenges"
    },
    {
      icon: <UsersIcon className={styles.featureIcon} />,
      title: "Peer Learning",
      description: "Collaborate with passionate learners"
    },
    {
      icon: <AcademicCapIcon className={styles.featureIcon} />,
      title: "Skill Building",
      description: "Master in-demand tech skills"
    }
  ]

  return (
    <div id="mulearn" className={styles.container}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.header}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <PlayCircleIcon className={styles.badgeIcon} />
            <span>DISCOVER MULEARN</span>
          </motion.div>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            What is <span className={styles.highlight}>μLearn</span>?
          </motion.h2>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A revolutionary peer-learning platform empowering students to learn, build, and grow together
          </motion.p>
        </div>

        <motion.div 
          className={styles.videoContainer}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/ehdSEL_s050?si=QKn4mAgqM26NEAC_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        <motion.div 
          className={styles.features}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
