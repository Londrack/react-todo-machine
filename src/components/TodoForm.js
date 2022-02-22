import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import { Button } from './Button';

export function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('');
    const [newTodoCategory, setNewTodoCategory] = useState('');
    const [valueControl, setValueControl] = useState(true);
    const [catControl, setCatControl] = useState(true);

    const { categories, addTodo, setOpenModal } = useContext(TodoContext);


    const onAdd = e => {
        e.preventDefault();
        const newValueControl = (newTodoValue !== '') ? true : false;
        setValueControl(newValueControl)
        const newCatControl = (newTodoCategory !== '') ? true : false;
        setCatControl(newCatControl)

        if (newValueControl && newCatControl){
            addTodo(newTodoValue, newTodoCategory);
            setOpenModal(false);
        }else{
            return false;
        }
    }


    const onChangeInput = e => {
        setNewTodoValue(e.target.value)
    }

    const onChangeSelect = e => {
        setNewTodoCategory(e.target.value)
    }

    return (
        <form onSubmit={onAdd} className='flex flex-col gap-5 '>
            <input className={`border-b-[1px] ${!!valueControl ? 'border-gray-400' : 'border-red-600'} pb-2`}
            placeholder='¿Qué hay que hacer?' type={'text'}
            value={newTodoValue}
            onChange={onChangeInput}
            />
            <select className={`border-b-[1px] ${!!catControl ? 'border-gray-400' : 'border-red-600'} pb-2`}
            onChange={onChangeSelect}
            value={newTodoCategory}
            >
                <option value="">[Categoria]</option>
                {categories.map((cat) =>
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                )}
            </select>
            <Button type="submit">
                <i className="fas fa-plus mr-2"></i>
                Agregar Todo
            </Button>
        </form>
    )
}
