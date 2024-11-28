// INTERFACES

interface IUser{
    username:string;
    email:string;
    age:number
}

interface IEmployee extends IUser{
    employeeId:number
}

const emp:IEmployee={
    username:"john",
    email:"john@gmail.com",
    age:21,
    employeeId:1
}

const Client:IUser={
    username:"David",
    email:"David@gmail.com",
    age:21
}