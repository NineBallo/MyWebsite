import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import backArrow from "../public/Assets/Header/ArrowBack4.png";


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
                            layout="intrinsic"
                            priority={true}
                            loading={"eager"}
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
