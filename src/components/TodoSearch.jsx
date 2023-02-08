import { TodoContext } from "../TodoContext/TodoContext";
import { useContext } from 'react';

function TodoSearch() {

    const {searchValue, setSearchValue} =  useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }
    return (
        <>
         <input
            className="inputToDos" placeholder="Busca aquí tu tarea"
            value={searchValue}
            onChange={onSearchValueChange}
        ></input>
      
        </>
       
    )
}

export { TodoSearch };