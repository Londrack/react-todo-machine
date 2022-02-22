import { useContext } from "react"
import { TodoContext } from "../TodoContext";

export function TodoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearch = event => {
        const value = event.target.value;
        setSearchValue(value);
    }

    const clearInput = event => {
        event.target.value = ""
    }

    return (
        <div className='absolute top-6 right-2'>
            <input
              placeholder='Buscar...'
              className='relative py-[15px] pr-[35px] pl-[20px]
              w-[10px] rounded-full
              text-gray-900 text-base
              tracking-[2px] border-0 transition-all duration-500
              outline-none drop-shadow-lg
              focus:bg-slate-100 focus:w-[275px] focus:md:w-[340px]'
              type="text"
              onChange={onSearch}
              value={searchValue}
              onBlur ={clearInput}
            />
            <i className="fas fa-search relative left-[-37px] pointer-events-none"></i>
        </div>
    )
}
