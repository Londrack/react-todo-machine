import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import { CirclePicker } from 'react-color'
import { Button } from './Button';

export function CategoryForm() {
    const [newCatName, setNewCatName] = useState('');
    const [newCatColor, setNewCatColor] = useState('');

    const { addCategory, setOpenModal } = useContext(TodoContext);

    const onAdd = e => {
        e.preventDefault();
        addCategory(newCatName, newCatColor);
        setOpenModal(false);
    }

    const onChangeInputName = e => {
        setNewCatName(e.target.value)
    }

    const onChangeColor = e => {
        setNewCatColor(e.hex);
    }

    return (
        <form onSubmit={onAdd} className='flex flex-col gap-5 '>
            <input className='border-b-[1px] border-gray-400 pb-2'
            placeholder='Nombre de la categoría' type={'text'}
            value={newCatName}
            onChange={onChangeInputName}
            />
            <div className='flex justify-center mb-3'>
                <CirclePicker onChange={onChangeColor} />
            </div>
            {/* <input className='border-b-[1px] border-gray-400 pb-2'
            placeholder='Color' type={'text'}
            value={newCatName}
            onChange={onChangeInputName}
            /> */}
            <Button type="submit">
                <i className="fas fa-plus mr-2"></i>
                Agregar
            </Button>
        </form>
    )

}
