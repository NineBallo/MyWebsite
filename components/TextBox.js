import styles from "../styles/TextBoxes.module.css";
import HStyles from "../styles/Home.module.css";

import Image from "next/image";
import Link from "next/link";

export function InfoParent({ children }) {

    return(
            <div className={styles.infoParent}>
                {children}
            </div>
    )
}

export function InfoChild(props) {

    return(
        <div className={styles.infoChild}>
            <b>{props.title}</b>
            <p>{props.desc}</p>
        </div>
    )
}


export function SnakeBoxParent({ children }) {

    return(
        <div className={styles.snakeParent}>
            {children}
        </div>
    )
}


function SnakeImage(img, link) {

    return (
        <a href={link} target="_blank" className={styles.snakeImg}>
            <Image
                src={img}
                alt="Snake Box"
                placeholder="blur"
                layout="responsive"
            />
        </a>

    )
}

function SnakeText(text) {
    return (
            <div className={styles.snakeText}>
                <b>{text}</b>
            </div>
    )
}

export function SnakeBoxChild(props) {
    return(
        <div className={styles.snakeChild}>
            {SnakeImage(props.img, props.link)}
            <div className={styles.snakeSpacer} />
            {SnakeText(props.txt)}
        </div>
    )
}


export function ProjectCard(props) {
    return(
        // eslint-disable-next-line @next/next/link-passhref
        <Link href={props.link}>
            <div className={HStyles.card}>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </Link>
    )
}

export function ContactCard(props) {
    let link = undefined;
    let style = {};
    if (props.link) {
        link = props.link;
        style.cursor = "pointer";
    } else {
        style.cursor = "initial";
    }
    return (

    <a className={HStyles.card} href={link} style={style} target="_blank">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </a>

    )
}