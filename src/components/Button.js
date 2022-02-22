export function Button({ children, type, clickEvent }) {

    const onClickEvent = () => {
        if(clickEvent){
            clickEvent()
        }
    }

    return (
        <button type={type || 'button'}
        className="bg-sky-500 hover:bg-sky-800 text-white rounded-3xl
        font-semibold px-4 py-2"
        onClick={onClickEvent}>
            { children }
        </button>
    )
}
