import { useContext } from "react"
import { TodoContext } from "../TodoContext";

export function TodoCounter() {
    const {completedTodos, totalTodos} = useContext(TodoContext);

    return (
        <>
            <h1 className="font-extrabold text-lg">Mi lista de tareas</h1>
            <h2 className="font-semibold">Has completado {completedTodos} de {totalTodos}</h2>
        </>
    )
}
