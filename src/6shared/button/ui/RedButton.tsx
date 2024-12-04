export const RedButton = ({children, onClick, disable=false}: {
    children: React.ReactNode,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    disable?: boolean
}) => {

    
    return (
        <button

        onClick={(e) => onClick(e)}
        className={`group flex m-auto w-3/4 flex-col items-center rounded-full border border-red-400 py-3 text-3xl font-light text-red-400 transition-all duration-500 hover:bg-red-500 hover:text-white ${disable&&'opacity-40'}`}
      >
        {children}
      </button>
    )
}
