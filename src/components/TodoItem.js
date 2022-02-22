// import { useContext } from "react"
// import { TodoContext } from "../TodoContext";
import { getCorrectTextColor } from "../functions/getCorrectTextColor";

export function TodoItem({ todo, onComplete, deleteTodo, category }) {

    const onDelete = () => {
        if(window.confirm(`¿Deseas eliminar el ToDo "${todo.text}"?`)){
          deleteTodo(todo.text)
        }
    }

    return (
        <div className="flex justify-start mb-5">

            <div style={{ backgroundColor: category.color }}
              className="w-[10px] rounded-l-lg min-h-14 block"
            ></div>

            <div
              className="flex items-center w-full min-h-14 justify-start text-left
              shadow-lg px-2 py-4 gap-4 relative ml-[5px] rounded-r-lg
              before:contents-[''] before:w-[10px] before:h-full
              before:block before:absolute before:left-[-10px]"
            >
                <input
                  onClick={onComplete}
                  defaultChecked={todo.completed}
                  type='checkbox'
                  className="scale-150"
                />

                <p className="font-semibold text-stone-900">{todo.text}</p>

                <div className="ml-auto flex justify-center items-center gap-2">
                    <span
                      style={{ backgroundColor: category.color, color: getCorrectTextColor(category.color) }}
                      className="rounded py-1 px-2 text-xs"
                    >{category.name}</span>

                    <i
                      style={{ color: category.color}}
                      className="far fa-trash-alt text-xl cursor-pointer"
                      onClick={onDelete}
                    ></i>

                </div>
            </div>
        </div>
    )
}

