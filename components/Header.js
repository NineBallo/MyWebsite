import Image from "next/image";
import Link from "next/link";

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
        <header className={SHeader.subpageHeader}>
            <Link href={link} passHref>
                <div className={SHeader.headerNameBox}>
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

            <div className={SHeader.headerSpacer}/>

            <div className={SHeader.headerButtonBox}>
                {buttons}
            </div>
        </header>
    )
}
