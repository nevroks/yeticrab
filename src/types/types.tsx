// interface IDeliver{
//     firstname:string,
//     lastname:string,
//     surname:string
// }
export interface IApply{
    id:number,
    date:string,
    company:string,
    deliver:string,
    phoneNumber:string,
    commentary:string,
    status:'Новая' | 'В работе' | 'Завершено' | string,
    ati:string
}