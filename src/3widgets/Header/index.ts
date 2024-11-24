
import { toogleCartVisible } from '../../5entities/Cart/model/cart.model';
import { count } from '../../5entities/Cart/model/cart.selectors';
import { isVisivble } from '../Cart/models/cart.selectors';
import { HeaderWidgets } from './ui/header.ui';




export default HeaderWidgets

export const actions = {toogleCartVisible}
export const selectors = {count, isVisivble}