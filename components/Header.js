import styles from "../styles/Home.module.css";
import pStyles from "../styles/Projects.module.css";

export function Header({ children }) { 

    return(
    <header className={pStyles.projectHeader}>
        <div className={styles.headerNameBox}>
          <h2 className={styles.subpageName}>go back</h2>
        </div>

        <div className={pStyles.headerButtonBox}>
            {children}
        </div>
      </header>

    )
}
