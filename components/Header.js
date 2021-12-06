import styles from "../styles/Home.module.css";
import backArrow from "../public/backArrow.png";
import Image from "next/image";
import Link from "next/link";

export function Header(props) {
    let link='/'
    if(props.goBackLink) {
        link = props.goBackLink;
    }
    return (
        <header className={styles.subpageHeader}>
            <Link href={link} passHref>
                <div className={styles.headerNameBox}>
                        <Image
                            src={backArrow}
                            alt="Back"
                            layout="intrinsic"
                            priority={true}
                        />
                </div>
            </Link>

            <div className={styles.headerSpacer}>
            </div>
            <div className={styles.headerButtonBox}>
                {props.children}
            </div>
        </header>
    )
}
