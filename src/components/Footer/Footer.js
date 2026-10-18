import styles from './Footer.module.css';

function Footer(){
      return (
        <div className={styles.Footer}>
          <div className={styles.FooterLeft}>
            <p>Copyright © Gregor Ritchie 2026. All Rights Reserved</p>
          </div>
          <div className={styles.FooterMiddle}><p>
              This Website was created by Gregor Ritchie using React.<br></br>
              The source code can be found <a href="https://github.com/GRitchie1/portfolio-website">Here.</a>
            </p>
          </div>
          <div className={styles.FooterRight}></div>         
        </div>
      );
}



export default Footer;