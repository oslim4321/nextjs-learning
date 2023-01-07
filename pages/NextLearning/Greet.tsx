
interface props {
    name: string,
    message: number,
    isloggedIn: boolean
}

const Greet: React.FC<props> = ({ name, message, isloggedIn }) => {
    return (
        <div>
            {
                isloggedIn
                    ?
                    <h1>Welcome {name} You have {message} unread message</h1>
                    :
                    <h1>Welcome Guest</h1>
            }
        </div>
    )
}

export default Greet

