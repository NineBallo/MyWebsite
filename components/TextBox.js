import styles from "../styles/TextBoxes.module.css";

export function InfoParent({ children }) {

    return(
            <div className={styles.infoParent}>
                {children}
            </div>
    )
}

export function InfoChild({ children }) {

    return(
        <div className={styles.infoChild}>
            {children}
        </div>
    )
}
