//FUNCTIONS

let sayHi=()=>{
    console.log("hai");
    
}

// sayHi="2"

let funcReturnString=():string=>{
    console.log("helloo");
    return "hello gs"
    
}

let multiple=(num:number)=>{
    return num*2
}

let multiple2=(num:number):number=>{
    return num*2
}

let multiple3=(num:number):void=>{
    // return num*2
    //it doesn,t return
}

let sum=(num1:number,num2:number,another?:number)=>{
    return num1+num2
}
sum(2,3)

let func=(user:{username:string,age:number,phone?:number})=>{
    console.log(user.username);
    
}

//TYPE ALIASES
type userType={
    username:string;
    age:number;
    phone?:string
}

let betterFunc=(user:userType)=>{
     console.log(user.username);
     
}

type myFunc=(a:number,b:string)=>void

let write:myFunc=()=>{
    return "haii"
}

write(42, "example");

type UserType2={
    username:string;
    age:number;
    phone?:string;
    theme:"dark" | "light";
}

const UserwithTheme:UserType2={
    username:"john",
    age:21,
    phone:"23423423",
    theme:"dark"
}