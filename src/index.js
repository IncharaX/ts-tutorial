"use strict";
/*. datatypes
let sales=123_456_789;
let course:string="TypeScript";
let is_published:boolean=true;
let level;*/
Object.defineProperty(exports, "__esModule", { value: true });
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear); //optional chaining//
//# sourceMappingURL=index.js.map