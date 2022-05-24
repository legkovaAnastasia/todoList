import ListTodo from './ListTodo';
import todo from './todo.css'
import { useState, useEffect } from 'react';
import Counter from './Counter';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const [input, setInput] = useState('');

    const [filtered, setFilter] = useState(todos);

    useEffect(() => {
        setFilter(todos);
    }, [todos]);

    const handleChange = (e) => {
        setInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.length <= 10) {
            const newTodo = {
                id: Math.random().toString().substring(2, 4),
                todoItem: input,
                checked: false,
            }
            setTodos([...todos, newTodo]);
        } else {
            alert('max amount of symbols is 10')
        }
        setInput('');
    }

    const filterTodo = (checked) => {
        if (checked === 'all') {
            setFilter(todos);
        } else {
            setFilter([...todos.filter((todo) => todo.checked === checked)]);
        }
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
            ...todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo })
        ])
    }

    let activeCounter = filtered.filter(todo => todo.checked === false).length;
    let inactiveCounter = filtered.filter(todo => todo.checked === true).length;
    let everyCounter = filtered.filter(todo => todo.checked === false || true).length;

    return (
        <div>
            <h1 className='title'> Todo list: {everyCounter}</h1>
            <h1 className='title'> ActiveTodo: {activeCounter}</h1>
            <h1 className='counter'> Inactive Todo: {inactiveCounter} </h1>
            <form className='input-form' onSubmit={handleSubmit}>
                <input
                    className='form-control'
                    type='text'
                    placeholder='max amount of symbols is 10'
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} />
                <button className='btn-add'>Add</button>
            </form>

            <div className='list-header'>
                <div className='all-todos' onClick={() => filterTodo('all')} >All todos</div>
                <div className='done-todos' onClick={() => filterTodo(true)} >Done todos</div>
                <div className='active-todos' onClick={() => filterTodo(false)} >Active todos</div>
            </div>

            {filtered.map((todo) => {
                return (
                    <ListTodo todo={todo} key={todo.id} removeItem={removeItem} checkItem={checkItem} />
                )
            })}
        </div>
    )
}


export default Todo;