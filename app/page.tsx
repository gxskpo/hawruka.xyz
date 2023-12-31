"use client";
import styles from './Home.module.css';
import ProfileRow from "@/app/components/profileRow";
import ProjectElement from "@/app/components/projectElem";
import {showModal} from "@/app/components/genericModal";


export default function Home() {
    const goSocials = (name: string) => {
        const urls: { [key: string]: string } = {
            "twitter": "https://x.com/gxskpo",
            "github": "https://github.com/gxskpo",
            "discord": "https://discord.gg/NZCeaKzwaY",
            "instagram": "https://instagram.com/hawrukadev"
        }

        if (name === "discord") {
            const confirm: boolean = window.confirm("Este link te llevará a mi servidor de discord, ¿estás seguro?");
            if (!confirm) return;
        }


        const target = urls[name] ?? "https://x.com/gxskpo";
        window.open(target, "_blank", "noopener noreferrer");
    }

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
                    <button onClick={() => goSocials('twitter')}>
                        <i className="fab fa-twitter"/>
                    </button>
                    <button onClick={() => goSocials('github')}>
                        <i className="fab fa-github"/>
                    </button>
                    <button onClick={() => goSocials('discord')}>
                        <i className="fab fa-discord"/>
                    </button>
                    <button onClick={() => goSocials('instagram')}>
                        <i className="fab fa-instagram"/>
                    </button>
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
                <ProfileRow description="View website source:" icons={[
                    {name: "github", color: "#fff", nick: "GitHub"},
                ]} callback={() => {
                    window.open("https://github.com/gxskpo/myWeb", "_blank", "noopener noreferrer");
                }}/>
            </div>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsTitle}>
                    <h2>Mis proyectos ^^</h2>
                </div>
                <div className={styles.projects}>
                    <ProjectElement url="https://beta.fembot.online" imageUrl="/sunburst-icon.png"
                                    projectName="SunBurst" description="Bot de discord multifuncional"
                                    useIcons={[
                                        {className: "fab fa-discord"},
                                        {className: "devicon-python-plain"}
                                    ]} openSource={false}/>
                    <ProjectElement url="https://github.com/gxskpo/sunburst" imageUrl="/sunburst-next.png"
                                    projectName="SunBurst (webpage)" description="Página web de SunBurst"
                                    useIcons={[
                                        {className: "devicon-nodejs-plain"},
                                        {className: "devicon-nextjs-original"},
                                        {className: "devicon-typescript-plain"},
                                        {className: "devicon-tailwindcss-plain"}
                                    ]} openSource={true}/>
                    <ProjectElement url="https://github.com/gxskpo/hayami" imageUrl="/hayami_icn_mini.png"
                                    projectName="Hayami Bot" description="El bot de discord más inútil jamás creado"
                                    useIcons={[
                                        {className: "fab fa-discord"},
                                        {className: "devicon-python-plain"},
                                        {className: "devicon-sqlite-plain"}
                                    ]} openSource={true}/>
                    <div style={{display: "none"}}>
                        {/*
                        <ProjectElement url="https://galactiko.net/api" imageUrl="/api_icn_mini.png"
                                        projectName="Galactiko API"
                                        description="API para bots de discord. ¡Próximamente!"
                                        useIcons={[
                                            {className: "devicon-csharp-plain"},
                                            {className: "devicon-dotnetcore-plain"},
                                            {className: "devicon-mysql-plain"}
                                        ]} openSource={false}/>
                         */}
                    </div>
                </div>
            </div>
        </div>
    )
}
