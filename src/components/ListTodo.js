import { useState } from "react";

const ListTodo = ({todo, removeItem, checkItem}) => {

    // const checkItem = () => {

    // }

    return (
        <div key={todo.id} className='todo-list'>
                <div className={todo.checked ? 'todo-exact checked' : 'todo-exact'}
                 type='text'
                 onClick={() => checkItem(todo.id)}>
                    {todo.todoItem}
                </div>
                <button className='btn-delete' onClick={() => removeItem(todo.id)}>Delete</button>
            </div>
    )
}

export default ListTodo;