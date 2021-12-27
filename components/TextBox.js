import Image from "next/image";

import STextBox from "../styles/Components/TextBoxes.module.css";

export function InfoParent({children}) {

    return (
        <div className={STextBox.infoParent}>
            {children}
        </div>
    )
}

export function InfoChild(props) {

    return (
        <div className={STextBox.infoChild}>
            <b>{props.title}</b>
            <p>{props.desc}</p>
        </div>
    )
}


export function SnakeBoxParent({children}) {

    return (
        <div className={STextBox.snakeParent}>
            {children}
        </div>
    )
}


function SnakeImage(img, link) {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={STextBox.snakeImg}>
            <Image
                src={img}
                alt="Snake Box"
                placeholder="blur"
                layout="responsive"
            />
        </a>

    )
}

///Probably a more efficient way to automate this but this is what we are going with
function SnakeText(text, tag = "", link = "") {
    let regEx = new RegExp(tag, "g")

    let tagLength = tag.length;
    let lastIdxEnd = 0;
    let splitText = []

    let textSize = text.length;

    for (let tagCount = text.match(regEx).length; tagCount >= 0; tagCount--) {

        let startIDx = text.indexOf(tag, lastIdxEnd);

        if (startIDx === -1) {
            startIDx = textSize;
        }

        splitText.push(text.slice(lastIdxEnd, startIDx))

        lastIdxEnd = startIDx + tagLength;
    }

    let output = [];
    for (let i = 0; i < splitText.length; i++) {
        output.push(<b key={`text${i}`}>{splitText[i]}</b>)
        if (splitText.length - 1 !== i) {
            output.push(<a key={`tag${i}`} href={link} rel="noopener noreferrer" target="_blank">{tag}</a>)
        }
    }

    return (
        <div className={STextBox.snakeText}>
            {output}
        </div>
    )
}

export function SnakeBoxChild(props) {
    return (
        <div className={STextBox.snakeChild}>
            {SnakeImage(props.img, props.link)}
            <div className={STextBox.snakeSpacer}/>
            {SnakeText(props.txt, props.tag, props.link)}
        </div>
    )
}