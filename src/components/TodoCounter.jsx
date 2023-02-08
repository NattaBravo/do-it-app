import { React, useContext }  from "react";
import { TodoContext } from "../TodoContext/TodoContext";


function TodoCounter() {
    
    const { totalTodos, completedTodos } =  useContext(TodoContext);

    return (
        <article className="titleDOIT">
            <h1 className="do-it-title">DO IT</h1>
            <h1 className="appTitle">App</h1>
            <h3 className="titleCounter">Has completado {completedTodos} de {totalTodos} TO-DOs</h3>
        </article>

    )
};

export default TodoCounter;