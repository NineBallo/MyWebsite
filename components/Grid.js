import Link from "next/link";

import SGrid from "../styles/Components/Grid.module.css";

export function Grid({children}) {
    return (
        <div className={SGrid.grid}>
            {children}
        </div>
    )
}

export function Card(props) {

    let cardStructure = [];
    let cardOutput = [];


    cardStructure.push(
        <b style={{fontSize: "120%"}} key={"GCard_Title" + props.Title}  >{props.Title}</b>,
        <div className={SGrid.spacer} key={"GCard_Spacer" + props.Title} />,
        <p style={{fontSize: "100%"}} key={"GCard_Description" + props.Title}  >{props.Description}</p>
    )

    if (props.OffSite !== undefined && props.OffSite === true) {
        cardOutput.push(
            <a className={SGrid.card} href={props.Link} style={{cursor: "pointer"}}
               rel="noopener noreferrer" target="_blank" key={`GCard_${props.Title}`}>
                {cardStructure}
            </a>
        )
    } else {
        cardOutput.push(
            <Link href={props.Link} key={`GCard_${props.Title}`} passHref>
                <div className={SGrid.card}>
                    {cardStructure}
                </div>
            </Link>
        )
    }

    return (
        cardOutput
    )
}