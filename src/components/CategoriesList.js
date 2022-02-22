import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { getCorrectTextColor } from "../functions/getCorrectTextColor";
import { Button } from './Button';

export function CategoriesList() {

    const {categories, setOpenModal, setModalType } = useContext(TodoContext);

    const onAddCat = () => {
        setModalType('category');
        setOpenModal(true)
    }

    return (
        <section className="overflow-auto max-h-[75.5%]">
            <h2 className="font-extrabold text-lg mb-3">Categorias</h2>
            <div className="flex flex-wrap gap-2 w-full">
                { categories.map((cat, i) =>
                    <span key={i}
                        style={{ backgroundColor: cat.color, color: getCorrectTextColor(cat.color) }}
                        className="rounded py-1 px-2 text-md"
                    >{cat.name}</span>
                )}
            </div>
            <div className="flex justify-center mt-6">
                <Button clickEvent={onAddCat}>
                    <i className="fas fa-plus mr-2"></i>
                    Agregar categoria
                </Button>
            </div>
        </section>
    )
}
