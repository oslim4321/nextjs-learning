
interface InputProps {
    value: string,
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}

export const InputValue = ({ value }: InputProps) => {
    const handleInputChange = () => {
        console.log(value)
    }
    return (
        <div>
            <input onChange={handleInputChange} value={value} type="text" />
        </div>
    )
}
