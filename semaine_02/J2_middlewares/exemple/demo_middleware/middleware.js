export function myMiddleware(req, res, next) {

    console.log("Hello, comment allez-vous ?");

    next();
}

// Currying pattern

export function middlewareWithArgs(message) {
    return function (req, res, next) {
        console.log(message);
        next();

    }
}