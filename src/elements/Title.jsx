import styles from './Title.module.css'

export const Title = ({ children, ...rest }) => {
  return (
    <h2 className={styles.title}>{children}</h2>
  );
};