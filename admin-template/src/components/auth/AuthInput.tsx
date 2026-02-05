type inputTypes = 'text' | 'password' | 'email'

interface AuthInputProps {
    label: string
    value: any
    type?: inputTypes
    required?: boolean
    whenShouldYouNotRender?: boolean
    changeValue?: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return props.whenShouldYouNotRender ? null :(
        <div className="flex flex-col">
            <label>{props.label}</label>
            <input
                type={props.type ?? "text"}
                value={props.value}
                onChange={e => props.changeValue?.(e.target.value)}
                required={props.required}
            />
        </div>
    )
}