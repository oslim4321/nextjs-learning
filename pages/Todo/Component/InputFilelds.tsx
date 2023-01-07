import React, { useRef } from 'react'
import styles from '../style.module.css'

interface props {
    todo: string,
    settodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}


const InputFilelds: React.FC<props> = ({ todo, settodo, handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div>
            <form onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }

            }
                className={styles.input}>
                <input
                    ref={inputRef}
                    onChange={(e) => settodo(e.target.value)}
                    type="text"
                    placeholder='Enter a task'
                    value={todo}
                    className={styles.input_box} />
                <button className={styles.input_button}>Go</button>
            </form>
        </div>
    )
}

export default InputFilelds