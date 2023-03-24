interface Props {
    id: string
    label: string
    placeholder: string
    type: string
    onChange: any
    value: string
    minLength?: number
    maxLength?: number
}

const InputComponent = ({
    id,
    label,
    placeholder,
    type,
    onChange,
    value,
    minLength,
    maxLength,
}: Props) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                className='border-2 rounded-md border-primary-violet placeholder:pl-1 placeholder:text-sm'
                id={id}
                name={id}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                value={value}
                minLength={minLength}
                maxLength={maxLength}
            />
        </>
    )
}

export default InputComponent
