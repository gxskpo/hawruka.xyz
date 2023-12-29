import styles from '../Home.module.css';
import {ReactNode} from "react";

interface IconDict {
    name: string,
    color: string
}

interface Props {
    description: string;
    icons: IconDict[];
}

export default function ProfileRow(props: Props) {
    const {description, icons} = props;
    let iconsList: ReactNode[] = [];
    for (let i in icons) {
        const icon = icons[i];
        const name = icon.name;
        const color = icon.color;
        iconsList.push(
            <i className={`devicon-${name}-plain`} style={{color: color}}/>
        )
    }


    return (
        <div className={styles.profileDataRow}>
            <p>{description}</p>
            <div className={styles.profileDRContainer}>
                {iconsList}
            </div>
        </div>
    )
}