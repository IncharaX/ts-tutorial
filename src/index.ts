/*. datatypes
let sales=123_456_789;
let course:string="TypeScript";
let is_published:boolean=true;
let level;*/

/*tuples
let user:[number,string]=[1,"Mosh"];
*/
/*
const Small=1;
const Medium=2;
const Large=3;

enum Size{Small,Medium,Large};
let mySize:Size=Size.Small;
console.log(mySize);
*/

/*
let employee:{
    readonly id:number,
    name:string
    retire:(date:Date)=>void
}={
     id:1,
     name:"Inchara",
     retire:(date:Date)=>{
        console.log(date);
     }
    };

    */                             // objects//

/*type Employee={
    readonly id:number,
    name:string
    retire:(date:Date)=>void
}    

let employee:Employee={
    id:1,
     name:"Inchara",
     retire:(date:Date)=>{
        console.log(date);
     }
    };   */                            // type alias//

    /*
 function kgtoLbs(weight: number|string):number{
    //narrowing
    if(typeof weight ==="number")
        return weight*2.2;
    else{
        return parseInt(weight)*2.2;
    }
 }   
 kgtoLbs(10);
 kgtoLbs("10kg");   */                            // union types//

 /*
 type draggable={
    drag:()=>void
 };
 type resizable={
    resize:()=>void
 };

 type uiWidget=draggable | resizable;
 
 let textBox:uiWidget={
    drag:()=>{},
    resize:()=>{}
 }. */                            // intersection types//

 /*
type Quantity= 10 | 20;
 let quantity=10;

 type Metric= 'cm' | 'inch';
 let metric : Metric='cm';  */                           // literal types//


 /*
 function greet(name:string | null){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
 }
 greet(null);  */                           // nullable types//


 type Customer={
    birthday?:Date;
 }
 function getCustomer(id:number): Customer | null | undefined{
    return id===0? null:{birthday:new Date()};
 }

 let customer = getCustomer(1);
 console.log(customer?.birthday?.getFullYear);     //optional chaining//
 
