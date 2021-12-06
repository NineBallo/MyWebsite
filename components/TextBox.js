import styles from "../styles/TextBoxes.module.css";
import Image from "next/image";
import showcase1 from "../public/engine2.png";
import showcase2 from "../public/engine4.png";


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


export function SnakeBoxParent({ children }) {

    return(
        <div className={styles.snakeParent}>
            {children}
        </div>
    )
}


function SnakeImage(img) {

    return (
        <div className={styles.snakeImg}>
            <Image
                src={img}
                alt="Snake Box"
                placeholder="blur"
                layout="responsive"
            />
        </div>
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
    let style = {}
    let layout1;
    let layout2;

    if(props.type === "even") {
        style.borderLeft = "1px solid white"

        layout1 = SnakeImage(props.img);
        layout2 = SnakeText(props.txt);

    } else {
        style.borderRight = "1px solid white"
        layout1 = SnakeText(props.txt);
        layout2 = SnakeImage(props.img);
    }

    return(
        <div className={styles.snakeChild} style={style}>
            {layout1}
            <div className={styles.snakeSpacer}/>
            {layout2}
        </div>
    )
}