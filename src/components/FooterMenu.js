import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
export function FooterMenu() {

    const { listPage, setListPage, setOpenModal, setModalType } = useContext(TodoContext);

    const onClickAddTodo = () => {
        setModalType('todo');
        setOpenModal(true);
    }

    const handleOnChange = () => {
        setListPage(!listPage);
    };

    return (
        <nav
        className="absolute bottom-0 left-0
        flex justify-around items-center
        w-full h-[90px] text-2xl text-stone-600">

            <button onClick={handleOnChange}>
                <i className={`fas fa-list-ul
                cursor-pointer ${listPage && 'text-sky-500'}`} ></i>
            </button>

            <button onClick={onClickAddTodo} className="bg-sky-500 text-white
            rounded-full py-4 px-[21px] mt-[-15px]">
                <i className="fas fa-plus"></i>
            </button>

            <button onClick={handleOnChange}>
                <i className={`fa-bookmark
                cursor-pointer ${!listPage ? 'text-sky-500 fas' : 'far'}`}></i>
            </button>

        </nav>
    )
}
