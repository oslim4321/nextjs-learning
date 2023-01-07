import React, { useEffect, useRef } from 'react'

const DomRef = () => {
    const Inputref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        Inputref.current?.focus()
        console.log(Inputref.current?.value)
    }, [])
    return (
        <div>
            <input type="text" ref={Inputref} />
        </div>
    )
}
export default DomRef