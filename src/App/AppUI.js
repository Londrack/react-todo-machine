import { useContext } from "react";
import { TodoContext } from "../TodoContext";

import { CategoriesList } from "../components/CategoriesList";
import { FooterMenu } from "../components/FooterMenu";
import { TodoCounter } from "../components/TodoCounter";
import { TodoFilter } from "../components/TodoFilter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { CategoryForm } from "../components/CategoryForm";

export function AppUI() {
    let category;

    const {
        listPage, dataStatus, searchedTodos,
        categories, toggleCompleteTodo, deleteTodo,
        openModal, modalType
    } = useContext(TodoContext);

    return (
        <>
            <div className="
                md:h-5/6 md:w-[420px] md:rounded-3xl
                h-screen w-screen
                bg-white p-8 relative
                ">
                {(listPage)
                    ? <>
                    <TodoCounter />
                    <TodoSearch />
                    <TodoFilter />
                    <TodoList>
                        { dataStatus.error && <p>Ups! Ha ocurrido un error 😥</p> }
                        { dataStatus.loading && <p>Estamos cargando... 😅</p> }
                        { (!dataStatus.loading && !searchedTodos.length) && <p>¡Crea tu primer ToDo 🤟!</p> }
                        {searchedTodos.map((todo, i) => {
                            category = categories.filter(cat => cat.name === todo.category);
                            return <TodoItem
                                key={i + todo.text}
                                todo={todo}
                                category={category[0]}
                                onComplete={()=> toggleCompleteTodo(todo.text)}
                                deleteTodo={()=> deleteTodo(todo.text)}
                            />
                            })
                        }
                    </TodoList>

                    </>
                    : <CategoriesList />
                }

                <FooterMenu  />
            </div>
            {(!!openModal) &&
                <Modal header={(modalType === 'todo') ? 'Agregar Todo' : 'Agregar Categoria'}>
                    {(modalType === 'todo') ? <TodoForm /> : <CategoryForm />}
                </Modal>
            }
        </>
    )
}
