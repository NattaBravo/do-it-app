import React from "react";

function TodoList(props) {
    return (
        <section className="list-box">
            {props.children}
            {console.log(props)}
        </section>
    )
}

export { TodoList }