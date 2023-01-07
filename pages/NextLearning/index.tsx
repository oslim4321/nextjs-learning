import Prop from "./Greet"
import Person from "./Person"
import PersonList from "./PersonList"
import Status from "./Status"
import Heading from './Heading'
import { Button } from "./Button"
import { InputValue } from "./InputValue"
import { Styling } from "./Styling"
import { User } from "./User"
import { Counter } from "./StateReducer/Counter"

function index() {
    const personName = {
        Finame: 'Oslim',
        surname: 'Sooto'
    }
    let nameList = [
        {
            Finame: 'Oslim',
            surname: 'Sooto'
        },
        {
            Finame: 'Semait',
            surname: 'Sooto'
        },
    ]

    // function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    //     console.log('button Clicked', e)

    // }
    function doSom(name: string, num: number) {
        console.log(name + 'have a' + num + 'expirence')
    }

    doSom('oslim', 20)

    return (
        <div>
            <Prop name={'Oslim'} message={20} isloggedIn={true} />
            <Person Property={personName} />
            <PersonList name={nameList} />
            <Status status={'success'} />
            <Heading>This Are Props Passed In</Heading>
            <Button handleClick={(e, id) => {
                console.log(e, id)
            }} />
            <InputValue value="" handleChange={e => console.log(e)} />
            <Styling />
            <User />
            <Counter />
        </div>
    )
}

export default index