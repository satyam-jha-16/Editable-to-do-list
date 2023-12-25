import React, { useState } from 'react'
import useToDo from '../context/ToDoContext';

function ToDoForm() {
    const [toDoItem, setToDoItem] = useState("")
    const { addToDo } = useToDo()

    const add = (e) => {
        e.preventDefault();

        if(!toDoItem) return ;

        addToDo({
            todo : toDoItem,
            completed: false
        })
        setToDoItem("")
    }
        
    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={toDoItem}
                onChange={(e) => {setToDoItem(e.target.value)}}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default ToDoForm