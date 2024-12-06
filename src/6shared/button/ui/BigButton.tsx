import { colorsbutton } from "../model/colorsbutton.types"




export const BigButton = ({children, color, onClick, disable=false}: {
    children: React.ReactNode,
    color: colorsbutton,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    disable?: boolean
}) => {

    
    return (
        <button

        onClick={(e) => onClick(e)}
        className={`group flex m-auto w-full flex-col items-center  py-3 text-3xl font-lighttransition-all duration-500 ${color}  ${disable&&'opacity-40'}`}
      >
        {children}
      </button>
    )
}
