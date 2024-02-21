"use client";
import styles from './Home.module.css';
import ProfileRow from "@/app/components/profileRow";
import ProjectElement from "@/app/components/projectElem";
import {showModal} from "@/app/components/genericModal";
import SocialButton from "@/app/components/socialButton";

export default function Home() {
    return (
        <main className={styles.indexLayout}>
            <section className={styles.profileContainer}>
                <div className={styles.myDataContainer}>
                    <div className={styles.dltCnt}>
                        <img
                            src="/pfp.png"
                            alt="Haruka"/>
                        <h1>Haruka</h1>
                    </div>
                    <div className={styles.sclContainer}>
                        <SocialButton icon={"fab fa-twitter"} url={"https://twitter.com/gxskpo"}/>
                        <SocialButton icon={"fab fa-github"} url={"https://github.com/gxskpo"}/>
                        <SocialButton icon={"fab fa-discord"} url={"https://discord.gg/NZCeaKzwaY"}/>
                        <SocialButton icon={"fas fa-donate"} url={"/donate"}/>
                        <SocialButton icon={"fab fa-instagram"} url={"https://instagram.com/hawrukadev"}/>
                    </div>
                </div>
                <ProfileRow description="My skills" icons={[
                    {name: "javascript", color: "#f7df1e", nick: "JavaScript"},
                    {name: "typescript", color: "#007acc", nick: "TypeScript"},
                    {name: "python", color: "#4B8BBE", nick: "Python"},
                    {name: "csharp", color: "#239120", nick: "C#"},
                    {name: "react", color: "#61dbfb", nick: "React"},
                    {name: "nextjs", color: "#000000", nick: "Next.js"},
                    {name: "nodejs", color: "#339933", nick: "Node.js"},
                    {name: "dotnetcore", color: "#fff", nick: ".NET Core"},
                    {name: "sqlite", color: "#fff", nick: "SQLite"},
                    {name: "mysql", color: "#4DB33D", nick: "MySQL"},
                ]} callback={(i) => {
                    showModal(i.nick ?? i.name, '', `devicon-${i.name}-plain`);
                }}/>
                <div className={styles.profileDataRow}>
                    <p>Source code of this website:</p>
                    <div className={styles.profileDRContainer}>
                        <a href="https://github.com/gxskpo/myWeb" target="_blank" rel="noreferrer" style={{
                            gridColumn: "span 5"
                        }}>
                            <i className="fab fa-github" style={{color: "#fff"}}/>
                        </a>
                    </div>
                </div>
            </section>
            <section className={styles.projectsContainer}>
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
                                        {className: "devicon-nextjs-original"},
                                        {className: "devicon-typescript-plain"},
                                        {className: "devicon-tailwindcss-plain"}
                                    ]} openSource={true}/>
                    <ProjectElement url="https://github.com/gxskpo/hayami" imageUrl="/meowybot.webp"
                                    projectName="MeowyBot"
                                    description="Bot de discord interactivo impulsado por GPT-4 Turbo"
                                    useIcons={[
                                        {className: "fab fa-discord"},
                                        {className: "devicon-python-plain"},
                                    ]} openSource={true}/>

                    <ProjectElement url="https://github.com/gxskpo/journal" imageUrl="/absdDefACL.png"
                                    projectName="Journal"
                                    description="Encrypted journal made with flask"
                                    useIcons={[
                                        {className: "devicon-python-plain"},
                                        {className: "devicon-flask-original"},
                                        {className: "devicon-sqlite-plain"}
                                    ]} openSource={true}/>
                    <h2 style={{
                        color: "#adadad"
                    }}>Projects I contributed to:</h2>
                    <ProjectElement url="https://github.com/KuroCat56/SatanyaBot" imageUrl="/satanya.png"
                                    projectName="SatanyaBot"
                                    description="Open source discord bot"
                                    useIcons={[
                                        {className: "fab fa-discord"},
                                        {className: "devicon-python-plain"},
                                    ]} openSource={true}/>
                </div>
            </section>
        </main>
    )
}