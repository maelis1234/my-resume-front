import router from 'next/router'

interface Props {
    route: string
    label: string
    type: 'submit' | 'reset' | 'button'
    width: string
    height: string
    disabled?: any
    otherProperties?: string
}

const PurpleButton = ({
    route,
    label,
    type,
    width,
    height,
    disabled,
    otherProperties,
}: Props) => {
    return (
        <button
            onClick={() => {
                router.push(`/${route}`)
            }}
            type={type}
            disabled={disabled}
            className={`text-white ${height} bg-primary-violet hover:bg-violet-400 ${width} rounded-2xl disabled:cursor-not-allowed ${otherProperties}`}
        >
            {label}
        </button>
    )
}

export default PurpleButton
