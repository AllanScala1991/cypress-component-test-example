import "./index.css"

interface InputProps {
    placeholder: string
    fontSize: number
    type: string
}

export function Input(props: InputProps) {
    return (
        <div className="inputContainer">
            <input 
            type={props.type}
            className="inputs"
            placeholder={props.placeholder}
            style={{fontSize: `${props.fontSize}vh`}} 
            />
        </div>
    )
}