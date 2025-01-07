require("dotenv").config();
// const dotenv = require("dotenv");
// dotenv.config();

if(process.env.APP_ENV){
console.log("Je suis en production");

} else {
console.log("Je suis en développement");

}