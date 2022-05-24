import todo from './todo.css'

const ListTodo = ({ todo, removeItem, checkItem }) => {

    return (
        <div>
            <div key={todo.id} className='todo-list'>
                <div className={todo.checked ? 'todo-exact checked' : 'todo-exact'}
                    type='text'
                    onClick={() => checkItem(todo.id)}
                    >
                    {todo.todoItem}
                </div>
                <button className='btn-delete' onClick={() => removeItem(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ListTodo;