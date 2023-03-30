import "./index.css"

interface LabelProps {
    text: string
    color: string
    fontSize: number
}

export function Label(props: LabelProps) {
    return (
        <div className="labelContainer">
            <label 
            className="label"
            style={{color: props.color, fontSize: `${props.fontSize}vh`}}
            >{props.text}</label>
        </div>
    )
}