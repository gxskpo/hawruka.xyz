import {ReactNode} from "react";
import styles from "@/app/Home.module.css";

interface IconDict{
    className: string, // Example: fa-discord, python-plain, fa-github
}

interface Props {
    url: string;
    imageUrl: string;
    projectName: string;
    description: string;
    useIcons: IconDict[];
    openSource: boolean;
}


export default function ProjectElement (props: Props): ReactNode {
    const openSourceIcon = () => {
        if (props.openSource) {
            return <i className={`fas fa-code-fork ${styles.openSourceBadge}`} style={{color: "#e89b0f"}}/>
        }
    }

    let iconsList: ReactNode[] = [];
    for (let i in props.useIcons) {
        const icon = props.useIcons[i];
        const className = icon.className;
        iconsList.push(
            <i className={className} style={{color: "#fff"}}></i>
        )
    }


    return (
        <a href={props.url}>
            <div className={styles.project}>
                <img src={props.imageUrl} alt="Haruka"/>
                <div className={styles.projectData}>
                    <h3>{props.projectName} {openSourceIcon()}</h3>
                    <p>{props.description}</p>
                </div>
                <div className={styles.languages}>
                    {iconsList}
                </div>
            </div>
        </a>
    )
}