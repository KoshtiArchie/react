import { createContext, useContext } from "react";

export const TodoContext= createContext({

    todos:[
        //the todos are stored in this array in obj form
        {
            id:1,
            //todo = title
            todo:"Todo msg",
            completed:false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo:(id) => {},
    toggleComplete: (id) =>{}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider