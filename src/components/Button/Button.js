import styles from './Button.module.css';

export function Button({ text, onClick, link, variant = 'primary' }) {
  const content = <span className={styles.ButtonText}>{text}</span>;
  const className = `${styles.ButtonContainer} ${variant === 'secondary' ? styles.Secondary : ''}`;

  if (link) {
    return (
      <a className={`${className} ${styles.ButtonLink}`} href={link} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;