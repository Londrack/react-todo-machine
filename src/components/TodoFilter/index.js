import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoFilter.css';

export function TodoFilter() {

    const {isFiltredComp, setIsFiltredComp} = useContext(TodoContext)

    const handleOnChange = () => {
        setIsFiltredComp(!isFiltredComp);
    };

    return (
        <div className='flex justify-center items-center py-5 drop-shadow-lg'>
            <div className={`switch-button before:content-['Completado'] bg-slate-100
                ${isFiltredComp ? "before:!text-white !text-gray-900" : ""}
                `}>
                <input
                    className="switch-button-checkbox"
                    type="checkbox"
                    checked={isFiltredComp}
                    onChange={handleOnChange}
                ></input>
                <label className="switch-button-label" htmlFor=''>
                    <span className="switch-button-label-span">Pendiente</span>
                </label>
            </div>
        </div>
    )
}

