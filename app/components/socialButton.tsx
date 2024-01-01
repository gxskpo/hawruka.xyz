interface SocialButtonProps {
    icon: string;
    name?: string;
    callback?: (name: any) => void;
}

export default function SocialButton(props: SocialButtonProps){

    const handleClick = () => {
        if (props.callback && props.name) {
            return props.callback(props.name);
        }
        props.callback?.(props.name);
    }

    return (
        <button onClick={handleClick}>
            <i className={props.icon}/>
        </button>
    )
}