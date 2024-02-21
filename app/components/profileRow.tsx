import styles from '../Home.module.css';
import React, {ReactNode} from "react";

interface IconDict {
    name: string,
    color: string
    nick?: string
    description?: string
}

interface Props {
    description: string;
    icons: IconDict[];
    callback?: (name: IconDict) => void;
}

interface ClickTarget extends EventTarget {
    dataset: any
}


export default function ProfileRow(props: Props) {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target: ClickTarget = e.target as ClickTarget;
        const iconName = target.dataset.name
        const {icons} = props;
        icons.map((icon) => {
            if (icon.name === iconName) {
                props.callback && props.callback(icon);
            }
        })
    }

    const {description, icons} = props;
    let iconsList: ReactNode[] = [];
    for (let i in icons) {
        const icon = icons[i];
        const name = icon.name;
        const color = icon.color;
        iconsList.push(
            <i className={`devicon-${name}-plain`} style={{color: color}} data-name={name}/>
        )
    }
    
    return (
        <div className={styles.profileDataRow} onClick={handleClick}>
            <p>{description}</p>
            <div className={styles.profileDRContainer}>
                {iconsList}
            </div>
        </div>
    )
}