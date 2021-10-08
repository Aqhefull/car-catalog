type InputProps = {
    value: string
    onChange: (text: string) => void
    placeholder: string,
    editable?: boolean,
    icon?: JSX.Element
}