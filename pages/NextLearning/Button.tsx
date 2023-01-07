
interface button {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (prop: button) => {
    return (
        <div>
            <button onClick={e => prop.handleClick(e, 2)}>Click me</button>
        </div>
    )
}

