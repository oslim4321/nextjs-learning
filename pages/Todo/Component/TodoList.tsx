import { Todo } from "./Model";
import style from '../style.module.css'
import SingleTodo from "./SingleTodo";

interface props {
    Items: Todo[];
    setItems: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<props> = ({ Items, setItems }) => {
    // console.log(Items)
    return (
        <>
            <div className={style.todoList}>
                {Items &&
                    Items.map((todo) => (
                        <SingleTodo
                            todo={todo}
                            key={todo.id}
                            setItems={setItems}
                            Items={Items}
                        />
                    ))
                }

            </div>
        </>
    )
}

export default TodoList
