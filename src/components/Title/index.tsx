import "./index.css"

interface TitleProps {
    text: string
    color: string
    fontSize: number
}

export function Title(props: TitleProps) {
    return (
        <div className="titleContainer">
            <span 
            className="title"
            style={{color: props.color, fontSize: `${props.fontSize}vh`}}
            >{props.text}</span>
        </div>
    )
}