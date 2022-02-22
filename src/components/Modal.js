import ReactDOM from 'react-dom';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

export function Modal({ children, header }) {
    const { setOpenModal} = useContext(TodoContext);

    const closeModal = () => {
        setOpenModal(false)
    }

    return ReactDOM.createPortal(
        <div className={`fixed z-50 inset-0 bg-gray-900 bg-opacity-60
        overflow-y-auto h-full w-full px-4 transition-opacity`}>
            <div className="relative top-40 mx-auto shadow-lg rounded-md
            bg-white max-w-md">
                <div className="flex justify-between items-center
                bg-sky-500 text-white text-xl rounded-t-md px-4 py-2">
                    <h3 className=' font-semibold'>{header}</h3>
                    <button onClick={closeModal}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="overflow-y-scroll py-6 px-4">
                    { children }
                </div>
                {/* <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
                    <button
                    className="bg-sky-500 text-white px-4 py-2 rounded-md
                    hover:bg-sky-800 transition" onClick={closeModal}>Close</button>
                </div> */}
            </div>
        </div>,
        document.getElementById('modal')
    )
}
