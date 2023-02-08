import React from "react";
import { useState, createContext } from 'react';
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {


    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState("");

    const [openModal, setOpenModal] = useState(false);


    //datos de contador
    const completedTodos = todos.filter(todo => todo.completed === true).length;
    const totalTodos = todos.length;

    //Condicional para ajuste de todos según el valor del input
    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }

    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const addTodos = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text,
        });
        saveTodos(newTodos);
    };

    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);

    }
    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodos,
                deleteTodos,
                addTodos,
                openModal,
                setOpenModal
            }}>
            {props.children}
        </TodoContext.Provider>
    )
} 

export { TodoContext, TodoProvider};