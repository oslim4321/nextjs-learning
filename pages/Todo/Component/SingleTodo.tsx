import React from 'react'
import { Todo } from './Model';
import style from '../style.module.css'

interface props {
    todo: Todo;
    Items: Todo[];
    setItems: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo: React.FC<props> = ({ todo, setItems, Items }) => {
    return (
        <>
            <form className={style.todo_single}>
                <span className={style.todo_single_text}>{todo.todo}</span>

                <div>
                    <div className={style.icon}>
                        <i className="bi bi-check2"></i>
                        <i className="bi bi-check2"></i>
                        <span>1</span>
                        <span>1</span>
                    </div>
                </div>

            </form>
        </>
    )
}

export default SingleTodo