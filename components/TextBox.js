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
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.snakeImg}>
            <Image
                src={img}
                alt="Snake Box"
                placeholder="blur"
                layout="responsive"
            />
        </a>

    )
}

///Probably a more efficent way to automate this but this is what we are going with
function SnakeText(text, tag="", link="") {
    let regEx = new RegExp(tag, "g")

    let tagLength = tag.length;
    let lastIdxEnd = 0;
    let splitText=[]

    let textSize = text.length;

    for(let tagCount = text.match(regEx).length; tagCount >= 0; tagCount--) {

        let startIDx = text.indexOf(tag, lastIdxEnd);

        if(startIDx === -1) {
            startIDx = textSize;
        }

        splitText.push(text.slice(lastIdxEnd, startIDx))

        lastIdxEnd = startIDx + tagLength;
    }

    let output = [];
    for(let i = 0; i < splitText.length; i++) {
        output.push(<b key={`text${i}`}>{splitText[i]}</b>)
        if(splitText.length-1 !== i) {
            output.push(<a key={`tag${i}`} href={link} rel="noopener noreferrer" target="_blank" >{tag}</a>)
        }
    }

        return (
            <div className={styles.snakeText}>
                {output}
            </div>
    )
}

export function SnakeBoxChild(props) {
    return(
        <div className={styles.snakeChild}>
            {SnakeImage(props.img, props.link)}
            <div className={styles.snakeSpacer} />
            {SnakeText(props.txt, props.tag, props.link)}
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

    <a className={HStyles.card} href={link} style={style} rel="noopener noreferrer" target="_blank">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </a>

    )
}