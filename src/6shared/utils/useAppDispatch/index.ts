
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../../1app/store.d';



export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
