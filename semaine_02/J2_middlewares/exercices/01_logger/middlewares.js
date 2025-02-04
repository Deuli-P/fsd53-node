let counter = 0;
export const requestCounter = (req, res, next) => {

    counter++;
    req.counter = counter;
    // console.log(req.counter);
    next();
}

export const logger = (req, res, next) => {

const counter = req.counter;
const method = req.method;
const path = req.path;
const query  = isNotEmpty(req.query) ? JSON.stringify(req.query) : "";
const body =  isNotEmpty(req.body) ? JSON.stringify(req.body) : "";

console.log(`${counter}) ${method} ${path} ${query} ${body}`);
next();

}

// isNotEmpty renverra en length 1; donc est-ce que 1 est supérieur à 0 ? Oui ! Donc il return true;
// const myObject = {
// key: "value",
// }

const isNotEmpty = (obj) => {
return Object.keys(obj).length > 0 //ça renvoie un booléen true ou false
}