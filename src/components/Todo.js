import ListTodo from './ListTodo';
import todo from './todo.css'
import { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const [input, setInput] = useState('');

    const handleChange = (e) =>{
        setInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input) {
            const newTodo = {
                id: Math.random().toString().substring(2,4),
                todoItem: input,
                checked: false
            }
            setTodos([...todos, newTodo]);
            console.log(todos);
        }
        setInput('');
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    }

    const removeItem = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)]);
    }

    const checkItem = (id) => {
        setTodos([ 
            ...todos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : {...todo})
        ]);
    }

    return (
        <div>
            <h1 className='title'> Todo list: {todos.length}</h1>
            <form className='input-form' onSubmit={handleSubmit}>
                <input 
                className='form-control' 
                type='text' 
                value={input} 
                onChange={handleChange}
                onKeyDown={handleKeyDown} />
                <button className='btn-add'>Add</button>
            </form>
            {todos.map((todo) => {
                return(
                    <ListTodo todo={todo} key={todo.id} removeItem={removeItem} checkItem={checkItem}/>
                )
            })}
        </div>
    )
}


export default Todo;