import React, { useState } from 'react'
import InputFields from './Component/InputFilelds'
import { Todo } from './Component/Model';
import TodoList from './Component/TodoList';
// import 'styles.css';
import styles from './style.module.css'

const Task: React.FC = () => {

  const [todo, settodo] = useState<string>("");
  const [Items, setItems] = useState<Todo[]>([])


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (!todo) {
      alert('no items')
      return
    }
    setItems([...Items, { id: Date.now(), todo: todo, isDone: false }])
    settodo('')
    console.log(Items)
  }




  return (
    <div className={styles.App}>
      <div className={styles.heading}>Taskify</div>
      <InputFields todo={todo} settodo={settodo} handleAdd={handleAdd} />
      <TodoList
        Items={Items}
        setItems={setItems} />

    </div>
  )
}

export default Task

