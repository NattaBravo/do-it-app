import { TodoContext } from "../TodoContext/TodoContext";
import { useState, useContext } from 'react';

function FormModal() {

    const [newTodoValue, setNewTodoValue] = useState("")

    const { 
        setOpenModal,
        addTodos,

    } = useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
        console.log(setNewTodoValue)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>¿Qué quieres hacer hoy?</h1>
            <textarea className="createTODOInput" placeholder="Escribe aquí..." value={newTodoValue}
                onChange={onChange}></textarea>
            <button type="submit" className="modalButtons">Guardar</button>
            <button type="button" className="modalButtons" onClick={() => { setOpenModal(false) }}>Cancelar</button>
        </form>
    )
}
export { FormModal };