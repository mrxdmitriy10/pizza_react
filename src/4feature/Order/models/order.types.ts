
export enum TOrderStage {
    OrderView = 'OrderChoose',
    Pay = 'Pay',
 }

 export type TOrderSlice = {
    orderStage: TOrderStage
 }