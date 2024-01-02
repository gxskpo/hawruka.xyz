"use client";
import styles from './Home.module.css';
import ProfileRow from "@/app/components/profileRow";
import ProjectElement from "@/app/components/projectElem";
import {showModal} from "@/app/components/genericModal";
import SocialButton from "@/app/components/socialButton";

export default function Home() {

    return (
        <div className={styles.indexLayout}>
            <div className={styles.profileContainer}>
                <span className={styles.myDataContainer}>
                <img
                    src="/pfp.png"
                    alt="Haruka"/>
                    <h1>Haruka</h1>
                </span>
                <div className={styles.socialsContainer}>
                    <p>Socials:</p>
                    <SocialButton icon={"fab fa-twitter"} url={"https://twitter.com/gxskpo"}/>
                    <SocialButton icon={"fab fa-github"} url={"https://github.com/gxskpo"}/>
                    <SocialButton icon={"fab fa-discord"} url={"https://discord.gg/NZCeaKzwaY"}/>
                    <SocialButton icon={"fab fa-instagram"} url={"https://instagram.com/hawrukadev"}/>
                    <SocialButton icon={"fas fa-donate"} url={"/donate"}/>
                </div>
                <ProfileRow description="Languages:" icons={[
                    {name: "javascript", color: "#f7df1e", nick: "JavaScript"},
                    {name: "typescript", color: "#007acc", nick: "TypeScript"},
                    {name: "python", color: "#4B8BBE", nick: "Python"},
                    {name: "csharp", color: "#239120", nick: "C#"},
                ]} callback={(i) => {
                    showModal(i.nick ?? i.name, '', `devicon-${i.name}-plain`);
                }}
                />
                <ProfileRow description="Techs:" icons={[
                    {name: "react", color: "#61dbfb", nick: "React"},
                    {name: "nextjs", color: "#000000", nick: "Next.js"},
                    {name: "nodejs", color: "#339933", nick: "Node.js"},
                    {name: "dotnetcore", color: "#512bd4", nick: ".NET Core"},
                ]} callback={(i) => {
                    showModal(i.nick ?? i.name, '', `devicon-${i.name}-plain`);
                }}/>
                <ProfileRow description="DBs:" icons={[
                    {name: "sqlite", color: "#fff", nick: "SQLite"},
                    {name: "mysql", color: "#4DB33D", nick: "MySQL"},
                ]} callback={(i) => {
                    showModal(i.nick ?? i.name, '', `devicon-${i.name}-plain`);
                }}/>
                    <div className={styles.profileDataRow}>
                        <p>Source code of this website:</p>
                        <div className={styles.profileDRContainer}>
                            <a href="https://github.com/gxskpo/myWeb" target="_blank" rel="noreferrer">
                                <i className="fab fa-github" style={{color: "#fff"}}/>
                            </a>
                        </div>
                    </div>
            </div>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsTitle}>
                    <h2>My projects ^^</h2>
                </div>
                <div className={styles.projects}>
                    <ProjectElement url="https://beta.fembot.online" imageUrl="/sunburst-icon.png"
                                    projectName="SunBurst" description="Multi-purpose discord bot"
                                    useIcons={[
                                        {className: "fab fa-discord"},
                                        {className: "devicon-python-plain"}
                                    ]} openSource={false}/>
                    <ProjectElement url="https://github.com/gxskpo/sunburst" imageUrl="/sunburst-next.png"
                                    projectName="SunBurst (webpage)" description="SunBurst's webpage"
                                    useIcons={[
                                        {className: "devicon-nodejs-plain"},
                                        {className: "devicon-nextjs-original"},
                                        {className: "devicon-typescript-plain"},
                                        {className: "devicon-tailwindcss-plain"}
                                    ]} openSource={true}/>
                    <ProjectElement url="https://github.com/gxskpo/hayami" imageUrl="/hayami_icn_mini.png"
                                    projectName="Hayami Bot" description="The useless discord bot"
                                    useIcons={[
                                        {className: "fab fa-discord"},
                                        {className: "devicon-python-plain"},
                                        {className: "devicon-sqlite-plain"}
                                    ]} openSource={true}/>

                    <ProjectElement url="https://github.com/gxskpo/journal" imageUrl="/absdDefACL.png"
                                    projectName="Journal"
                                    description="Encrypted journal made with flask"
                                    useIcons={[
                                        {className: "devicon-python-plain"},
                                        {className: "devicon-flask-original"},
                                        {className: "devicon-sqlite-plain"}
                                    ]} openSource={true}/>
                </div>
            </div>
        </div>
    )
}
