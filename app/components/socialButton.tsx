interface SocialButtonProps {
    icon: string;
    url?: string;
}

export default function SocialButton(props: SocialButtonProps) {


    return (
        <a href={props.url ?? "#"} target="_blank" rel="noopener noreferrer">
            <i className={props.icon}/>
        </a>
    )
}