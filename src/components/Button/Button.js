import styles from './Button.module.css';

export function Button({ text, onClick, link }) {
  const content = <span className={styles.ButtonText}>{text}</span>;

  if (link) {
    return (
      <a className={`${styles.ButtonContainer} ${styles.ButtonLink}`} href={link} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={styles.ButtonContainer} type="button" onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;