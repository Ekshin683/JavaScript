import {header} from "./header.js"
import {footer} from "./footer.js"
import {products} from "./products.js"

console.log(header);
console.log("................................");
const data = [...products];
console.table(data);
console.log("................................");
console.log(footer);
