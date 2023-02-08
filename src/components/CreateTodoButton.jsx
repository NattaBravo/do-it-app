import React from "react";

function CreateTodoButton(props){

    const onClickButton = () => {
        if(!props.openModal){
            props.setOpenModal(true);
        }
    }
    return (
        <button className="createToDoButton"
        onClick={onClickButton}>+</button>
    )
}

export { CreateTodoButton }