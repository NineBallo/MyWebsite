import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Components/Header.module.css";
import SHeader from "../styles/Components/Header.module.css";

import backArrow from "../public/Assets/Header/BackArrow.webp";

export function Header(props) {
    let link = '/'

    if (props.goBackLink) {
        link = props.goBackLink;
    }

    let buttons = [];
    if (props.buttons) {
        for (let BData of props.buttons) {
            buttons.push(
                <Link key={`HButton_${buttons.length}`} href={BData.Link} passHref>
                    <div className={SHeader.subpageButton}>
                        <p>{BData.Name}</p>
                    </div>
                </Link>
            )
        }
    }

    return (
        <header className={styles.subpageHeader}>
            <Link href={link} passHref>
                <div className={styles.headerNameBox}>
                    <Image
                        src={backArrow}
                        layout="intrinsic"
                        loading={"eager"}
                        priority={true}
                        alt={"Go Back"}
                        quality={80}
                    />
                </div>
            </Link>

            <div className={styles.headerSpacer}/>

            <div className={styles.headerButtonBox}>
                {buttons}
            </div>
        </header>
    )
}
