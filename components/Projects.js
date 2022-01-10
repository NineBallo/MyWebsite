import Image from "next/image";
import Link from "next/link";

import SProjects from "../styles/Pages/Projects.module.css";

export function ScrollIndicator({children}) {
    return (
        <div className={SProjects.scrollIndicator}>
            <span className={SProjects.scrollArrow}/>
            <span className={SProjects.scrollArrow}/>
            <span className={SProjects.scrollArrow}/>
        </div>
    )
}