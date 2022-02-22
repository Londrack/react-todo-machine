import { createContext, useState } from "react";
import { useLocalStorage } from "./Hooks/useLocalStorage";

const defaultCategories = [
    { name: 'Trabajo', color: '#FF0000' },
    { name: 'Casa', color: '#4682B4'},
    { name: 'Estudio', color: '#84cc16'}
  ]

export const TodoContext = createContext();

export function TodoProvider (props){
    const {item: todos, saveItem: saveTodos, dataStatus} = useLocalStorage('TODOS_V1', []);
    const {item: categories, saveItem: saveCategories, dataStatus: categStatus} = useLocalStorage('CATEGORIES_V1', defaultCategories );

    const [searchValue, setSearchValue] = useState('');
    const [isFiltredComp, setIsFiltredComp] = useState(false);
    const [listPage, setListPage] = useState(true);

    const [openModal, setOpenModal] = useState(false);
    const [modalType, setModalType] = useState('todo');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(!searchValue.length >= 1){
        searchedTodos = (isFiltredComp)
        ? todos.filter(todo => !!todo.completed)
        : todos.filter(todo => !todo.completed)
    }else{
        searchedTodos = todos.filter(todo => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
        })
    }

    const toggleCompleteTodo = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    const addTodo = (text, category) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
            category
        });
        saveTodos(newTodos);
    }

    const addCategory = (name, color) => {
        const newCat = [...categories];
        newCat.push({
            name: name,
            color: color
        });
        saveCategories(newCat)
    }

    return (
        <TodoContext.Provider value={{
            completedTodos,
            dataStatus,
            totalTodos,
            addTodo,
            deleteTodo,
            searchedTodos,
            toggleCompleteTodo,
            searchValue,
            setSearchValue,
            isFiltredComp,
            setIsFiltredComp,
            categories,
            addCategory,
            categStatus,
            listPage,
            setListPage,
            openModal,
            setOpenModal,
            modalType,
            setModalType
        }}>
            { props.children }
        </TodoContext.Provider>
    )
}