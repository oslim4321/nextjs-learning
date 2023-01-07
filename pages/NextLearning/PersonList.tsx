

type personListProps = {
    name: {
        Finame: string,
        surname: string
    }[]
}


const PersonList = (props: personListProps) => {

    return (
        // console.log(props.name)
        <div>
            {props.name.map((elem) => (
                <div key={elem.Finame}>
                    <h1>{elem.Finame}</h1>
                    <p>{elem.surname}</p>
                </div>
            ))}
        </div>
    )
}

export default PersonList