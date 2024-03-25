interface IDeliver{
    firstname:string,
    lastname:string,
    surname:string

}
export interface IApply{
    id:number,
    date:number,
    company:string,
    deliver:string | IDeliver,
    phoneNumber:string,
    commentary:string,
    status:'Новая' | 'В работе' | 'Завершено',
    ati:string
}