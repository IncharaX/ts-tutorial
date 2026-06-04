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
const Small = 1;
const Medium = 2;
const Large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Small;
console.log(mySize);
//# sourceMappingURL=index.js.map