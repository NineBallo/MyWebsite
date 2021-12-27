import Link from "next/link";
import Head from "next/head";


import {Header} from "../components/Header";
import {ProjectCard} from "../components/TextBox";


import SCommon from "../styles/Common.module.css";
import SProjects from "../styles/Pages/Projects.module.css";
import SHeader from "../styles/Components/Header.module.css";

export default function Projects() {
  return (
    <div className={SCommon.container}>
      <Head>
        <title>My Projects!</title>
        <meta
          name="description"
          content="A list of my currently public projects"
        />
      </Head>


        <Header goBackLink="/"
                buttons={[
                    {Name: "Volunteer Work", Link: "/Volunteer"},
                    {Name: "Contact Me", Link: "/Contact"},
                    {Name: "About Me", Link: "/AboutMe"}
                ]}
        />

      <div className={SCommon.titleSpacer}/>
      <h1 className={SCommon.title}>My Projects</h1>

      <div className={SCommon.grid}>
        <ProjectCard
        link={"/Projects/NineEngine"}
        title={"NineEngine"}
        desc={"A \"simple\" Vulkan renderer as a intro to graphics programming."}
        />
        <ProjectCard
            link={"/Projects/ZipZorpBeedleBorp"}
            title={"ZipZorpBeedleBorp"}
            desc={"Exploring the memory subsystem of a OS."}
        />
        <ProjectCard
            link={"/Projects/Solamanders"}
            title={"Solamanders"}
            desc={"A commissioned NFT project I worked on. Implements basic genetics, and family trees."}
        />

      </div>
        <footer>
            <Link href="https://github.com/NineBallo/MyWebsite" passHref>
                <h4 className={SCommon.footerLink}>Made by ME!</h4>
            </Link>
        </footer>
    </div>
  );
}
