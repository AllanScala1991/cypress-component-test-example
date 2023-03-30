import "./index.css"

interface ButtonProps {
    textColor: string
    backgroundColor: string
    buttonText: string
    onClick: any
}

export function Button(props: ButtonProps) {
    return (
        <div className="buttonContainer">
            <button 
            className="buttons"
            style={{color: props.textColor, backgroundColor: props.backgroundColor}}
            onClick={props.onClick}
            >{props.buttonText}</button>
        </div>
    )
}