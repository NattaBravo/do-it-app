import React from "react";
import { TodoContext } from "./TodoContext/TodoContext";
import { Fragment, useContext } from "react";
import TodoCounter from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from './Modal/modal.js'
import { FormModal } from "./Modal/formModal";
import { LoadingCircle } from "./components/loadingCircle"

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    return (
        <Fragment >
            <section className="bigContainer">
           {/* <video src={AerialShotOfCity} autoPlay="autoplay" loop="loop" muted playsInline onContextMenu="return false;" preload="auto" className='videoWallpaper'></video>*/}
    
           

                <TodoCounter />
                <TodoSearch />
                <TodoList>
                    {error && <p className="do-it-title">Que hiciste!!</p>}
                    {loading && <article><LoadingCircle /></article>}
                    {(!loading && !searchedTodos.length) && <article><p className="msg">¡Crea tu primer</p><p class="do-it-title">TO - DO!</p></article>}

                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodos(todo.text)}
                            onDelete={() => { deleteTodos(todo.text) }}
                        />
                    ))}
                </TodoList>

                {!!openModal && (
                    <Modal>
                        <FormModal />
                    </Modal>
                )}

                <CreateTodoButton
                    setOpenModal={setOpenModal}
                />
            </section>

        </Fragment>

    )

}

export { AppUI }