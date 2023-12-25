import { useContext, createContext } from 'react'

export const ToDoContext = createContext({
    todos :[
        {
            id:  1,
            todo: "todo task",
            completed : false,
        }
    ],
    addToDo : (todo) => {},
    updateToDo : (id, todo) => {},
    deleteToDo : (id) =>{},
    toggleComplete:  (id) =>{}
})


export default function useToDo(){
    return useContext(ToDoContext)
}
export const ToDoContextProvider = ToDoContext.Provider
