"use strict";
/*. datatypes
let sales=123_456_789;
let course:string="TypeScript";
let is_published:boolean=true;
let level;*/
Object.defineProperty(exports, "__esModule", { value: true });
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

    */ // objects//
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
    };   */ // type alias//
function kgtoLbs(weight) {
    //narrowing
    if (typeof weight === "number")
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
kgtoLbs(10);
kgtoLbs("10kg");
//# sourceMappingURL=index.js.map