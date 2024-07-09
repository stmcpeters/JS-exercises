// write an object constructor and instantiate the object
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = readStatus;
    this.info = function() {
        return `${this.title} by ${title.author}, ${this.pages} pages, ${this.readStatus ? 'already read' : 'not read yet'}`;
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());

// describe what a prototype is and how it can be used
// Prototypes are objects that the original object inherits that provides it methods and properties. Prototypes are used in order to save memory and can be accessed by using Object.getPrototypeOf().

// explain prototypal inheritance
// Prototypal inheritance refers to the ability of objects to inherit properties and methods from their prototype. When accessing a property or method on an object, JS searches through the object itself, if it's not found, the entire prototype chain is search until the property or method is found or until the end of the chain.

// understand the dos and donts of prototypal inheritance
// Do's: use prototypes to share methods and properties among objects to conserve memory and for better code organization.
//       Modify prototype methods carefully to make sure it's helpful to all objects that will inherit it.
// Don't: Modify the prototype chain of built-in JS objects (ex. object, array, etc) because it can cause unexpected behaviors

// how does "this" behave in different situations
// in a constructor function, 'this' refers to the newly created object
// in an object's method, 'this' refers to the object itself
// when used in a regular function, 'this' depends on how the function is called. It could refer to the global object (non-strict mode) or 'undefined' (strict-mode).