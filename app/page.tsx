"use client";
import styles from './Home.module.css';
import {useRouter} from "next/navigation";


export default function Home() {
    const goSocials = (name: string) => {
        const urls: { [key: string]: string } = {
            "twitter": "https://x.com/gxskpo",
            "github": "https://github.com/gxskpo",
            "discord": "https://discord.gg/NZCeaKzwaY",
            "instagram": "https://instagram.com/hawrukadev"
        }
        const target = urls[name] ?? "https://x.com/gxskpo";
        window.open(target, "_blank", "noopener noreferrer");
    }

    const goProject = (name: string) => {
        const urls: { [key: string]: any } = {
            "sunburst_bot": "https://beta.fembot.online",
            "sunburst_web": "https://github.com/gxskpo/sunburst",
            "hayami_bot": "https://github.com/gxskpo/hayami",
            // "galactiko_api": "https://galactiko.net/api"
        }
        const target = urls[name];
        if (target) {
            window.open(target, "_blank", "noopener noreferrer");
        } else {
            alert("Url del proyecto no encontrada :c")
        }
    }


    return (
        <div className={styles.indexLayout}>
            <div style={{display: "none"}}>
                <a target="_blank" href="https://icons8.com/icon/Fycm8TUhWmFU/c-sharp-logo">C Sharp Logo</a> icon by <a
                target="_blank" href="https://icons8.com">Icons8</a>
            </div>
            <div className={styles.profileContainer}>
                <span className={styles.myDataContainer}>
                <img
                    src="/pfp.png"
                    alt="Haruka"/>
                    <h1>Haruka</h1>
                </span>
                <div className={styles.socialsContainer}>
                    <p>Mis redes:</p>
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
                <div className={styles.langsIUse}>
                    <p>Lenguajes:</p>
                    <div className={styles.langsIUseContainer}>
                        <i className="devicon-javascript-plain" style={{color: "#f7df1e"}}></i>
                        <i className="devicon-typescript-plain" style={{color: "#007acc"}}></i>
                        <i className="devicon-python-plain" style={{color: "#4B8BBE"}}></i>
                        <i className="devicon-csharp-plain" style={{color: "#239120"}}></i>
                    </div>
                </div>
            </div>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsTitle}>
                    <h2>Mis proyectos ^^</h2>
                </div>
                <div className={styles.projects}>
                    <div className={styles.project} onClick={() => goProject('sunburst_bot')}>
                        <img src="/sunburst-icon.png" alt="Haruka"/>
                        <div className={styles.projectData}>
                            <h3>SunBurst</h3>
                            <p>Bot de discord multifuncional</p>
                        </div>
                        <div className={styles.languages}>
                            <i className="fab fa-discord"/>
                            <i className="devicon-python-plain"></i>
                        </div>
                    </div>
                    <div className={styles.project} onClick={() => goProject('sunburst_web')}>
                        <img src="/sunburst-next.png" alt="Haruka"/>
                        <div className={styles.projectData}>
                            <h3>SunBurst (webpage)</h3>
                            <p>Página web de SunBurst</p>
                        </div>
                        <div className={styles.languages}>
                            <i className="devicon-nodejs-plain"></i>
                            <i className="devicon-nextjs-original"></i>
                            <i className="devicon-typescript-plain"></i>
                            <i className="devicon-tailwindcss-plain"></i>
                        </div>
                    </div>
                    <div className={styles.project} onClick={() => goProject('hayami_bot')}>
                        <img src="/hayami-icon.png" alt="Haruka"/>
                        <div className={styles.projectData}>
                            <h3>Hayami bot</h3>
                            <p>El bot de discord más inútil jamás creado</p>
                        </div>
                        <div className={styles.languages}>
                            <i className="fab fa-discord"></i>
                            <i className="devicon-python-plain"></i>
                            <i className="devicon-sqlite-plain"></i>
                        </div>
                    </div>
                    <div className={styles.project} onClick={() => goProject('galactiko_api')}>
                        <img src="/api-iconm.jpeg" alt="Haruka"/>
                        <div className={styles.projectData}>
                            <h3>Galactiko API</h3>
                            <p>API para bots de discord. ¡Próximamente!</p>
                        </div>
                        <div className={styles.languages}>
                            <i className="devicon-csharp-plain"></i>
                            <i className="devicon-dotnetcore-plain"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
