import React from 'react'

function PageA() {
    let character: string;
    let isLoggedIn: Boolean;
    // let obj: {
    //     name: string,
    //     age: number,
    //     status: string[],
    // }

    // obj = {
    //     name: 'oslim',
    //     age: 20,
    //     status: ['wale', 'kunle']
    // }
    // let arr = ['oslim', 'wpow']

    // arr.push('20')
    // character = 'i love oslim'
    // isLoggedIn = false;

    // let mixed: (Boolean | number | string)[] = [];

    // mixed.push('hahahahah', 123, false)

    // console.log(mixed)

    // console.log(arr)
    // console.log(obj)
    // console.log(character)
    // console.log(isLoggedIn)

    type Person = {
        name: String,
        age?: number
    }
    const person: Person = {
        name: 'oslim',
        age: 20
    }
    console.log(person)

    // let print: unknown

    let printName = (name: string) => void

        console.log(printName)

    // console.log(print)

    // function print(name) {
    //     console.log(name)
    // }
    // print(30)

    return (
        <div>PageA
            <button >Increament</button>
        </div>
    )
}

export default PageA