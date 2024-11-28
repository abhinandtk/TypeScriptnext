//GENERICS


interface Iauthor{
    id:number;
    username:string;

}

interface ICategory{
    id:number;
    title:string
}

interface Ipost{
    id:number;
    title:string;
    desc:string;
    extra: Iauthor [] | ICategory []
}

interface IpostBetter<T>{
    id:number;
    title:string;
    desc:string;
    extra:T[]
}

const testMe:IpostBetter<string>={
    id:1,
    title:"post title",
    desc:"post desc",
    extra:["str","str2"]
}

interface IpostEvenBetter <T extends object>{
    id:number;
    title:string;
    desc:string;
    extra:[{id:2,username:"john"}]
}

const testMe2:IpostBetter<Iauthor>={
    id:1,
    title:"post title",
    desc:"post desc",
    extra:[{id:1,username:'john'}]
}
const testMe3:IpostBetter<ICategory>={
    id:1,
    title:"post title",
    desc:"post desc",
    extra:[{id:1,title:'john'}]
}