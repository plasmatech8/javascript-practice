# JavaScript Essentials Training (LinkedIn Learning)

Tutorial: https://www.linkedin.com/learning/javascript-essential-training-3/welcome?u=2093164

- [JavaScript Essentials Training (LinkedIn Learning)](#javascript-essentials-training-linkedin-learning)
  - [01. Introduction](#01-introduction)
  - [02. Basics](#02-basics)
    - [Script Tag](#script-tag)
    - [Standards](#standards)
  - [03. Working with Data](#03-working-with-data)
    - [Variables, Types, Operators](#variables-types-operators)
    - [Arrays](#arrays)
  - [04. Functions and Objects](#04-functions-and-objects)
    - [Functions](#functions)
    - [Variables](#variables)
    - [Constructor functions](#constructor-functions)
    - [Dot vs bracket notation](#dot-vs-bracket-notation)
    - [Closures](#closures)
  - [05. Changing DOM Elements](#05-changing-dom-elements)
    - [Get Elements](#get-elements)
    - [Properties](#properties)
    - [Attributes](#attributes)
    - [Create Elements](#create-elements)
    - [CSS](#css)
  - [06. JS Clock](#06-js-clock)
  - [07. DOM Events](#07-dom-events)
    - [Events](#events)
    - [Onclick event](#onclick-event)
    - [Event listener](#event-listener)
  - [08. Typing Speed Project](#08-typing-speed-project)
  - [09. Loops](#09-loops)


## 01. Introduction

Browsers use ECMAScript 2015 (ES6) to interpret JavaScript.

New versions of ECMAScript are slowly being developed. ES6 is the latest full standard being used.

## 02. Basics

### Script Tag

HTML is read from top to bottom, so you need to position your script properly (either execute the script in `head` or below `body`).

Nowadays, we can put all script tags in the header and we can use keywords to decide when a script will be executed.

There are 3 ways to load a JavaScript file:
* Right away loading
  * Causes render blocking.
  * Blocks HTML parsing during JS download and and JS execution.
* Asynchronous loading
  * Uses `async` keyword to download JS in parallel to HTML parsing.
  * Blocks HTML parsing only during JS execution.
* Deferred loading
  * Uses `defer` keyword to download JS in parallel to HTML parsing.
  * JS execution comes after HTML parsing.

Use no-keyword if you want to download and execute the script immediately (block HTML parsing).

Use `async` if you do not care when the JS is executed.

Use `defer` if you want the JS to be executed last.

### Standards

camelCase - variables
CapitalCase - Classes
ALLCAPS - CONSTANTS

## 03. Working with Data

### Variables, Types, Operators

Anytime you create a variable, use var.

If you assign a variable without a keyword, it will assume you are creating a global variable.

Data Types:
* Numeric
* String
* Boolean
* null
* undefined

Ternary operator: `condition ? 'value_if_true' : 'value_if_false'`

### Arrays

See `script.js`.

## 04. Functions and Objects

### Functions

Types:
* Named (`function myFunc(){...}`)
* Anonymous (`function(){...}`)
* Immediately invoked (`(function(){...})()`)

### Variables

Types:
* var (function scope)
* const (cannot be changed)
* let (block scope, i.e. loop or if statement scope)

### Constructor functions

Functions can be used as constructors for an object.

Note: it is better to use class definitions.

### Dot vs bracket notation

`course.title == course["title"]`

Use brackets if the property name contains unusual characters.

### Closures

Closures return a function (like decorators).

## 05. Changing DOM Elements

### Get Elements

Elements:
* The entire HTML document can be obtained using `window.document` or `document`.
* `document.body`
* `document.title`
* `document.URL`

DOM methods:
* `document.getElementById`
* `document.getElementByClassName`
* `document.getElementByTagName`
* etc...

Query DOM methods (more powerful):
* `document.querySelector` gets the first element that matches a query. i.e. `.main-nav a`
* `document.querySelectorAll` gets the all elements that matches a query.

### Properties

Some properties:
* `.innerHTML`
* `.outerHTML`
* `.className`
* `.classList`

Properties can be changed, i.e:
* `.add` to add a new class to an element. i.e. `document.querySelector(".masthead").classList.add("new-class")`
* `.toggle` to turn on/off a class. i.e. `document.querySelector(".masthead").classList.toggle("new-class")`
* `.contains`

### Attributes

Attribute methods:
* `element.hasAttribute`
* `element.getAttribute`
* `element.setAttribute`
* `element.removeAttribute`

### Create Elements

Element creation methods:
* `.createElement`
* `.createTextNode`
* `.appendChild`

### CSS

The `style` attribute contains styles object.

However, this is only the **inline** CSS properties and does not include CSS
stylesheets.

Changing CSS:
* Change via properties: `element.style.color = "green"`
* Change via cssText: `element.style.cssText = "padding: 1em; color: green";`
* Change via setAttribute: `element.setAttribute("style", "padding: 1em; color: green;")`

If the CSS property has a hyphen (-), then it is converted to camelCase.

Inline styles override the CSS stylesheets.

**IT IS BETTER TO USE CLASSES AND CSS SHEETS**

## 06. JS Clock
transition: transform .5s ease-in-out;
A clock was created using SVG.


There is a `g` tag used to hold the hour/minute/second arms. The `path` tags
used as lines for the arm and a `clicle` tag is used to set the centre.

The `transform: rotate(1deg)` style is used on the `g` to rotate the arm.

There are just a few problems with the current design:
* Hands move around a lot at the start.
* If the browser throttles or stops, the time with change (not using the `Date` object).

## 07. DOM Events

### Events

Browser level:
* Load (resource and dependents finished loading)
* Error (resource failed to load)
* Online/offline
* Resize
* window resize
* scroll
* etc...

DOM level:
* Focus (element clicked/tabbed to)
* Blur (element loses focus)
* Reset/Submit (forms)
* Mouse events (click/mouseover/drag/drop/etc)
* etc...

Other events:
* Media events (audio/playback)
* Progress events (browser progress)
* CSS transition events (transition start/run/end)
* etc...

### Onclick event

If we are clicking on an `a` link tag or a form submit tag, passing a paremeter
`e` and using `e.preventDefault();` will prevent normal behaviour.

### Event listener

An event listener can be used to have multiple functions on the same event.

We can also put our function into an anonymous function to allow use to
make a generic function to update the CTA element using `this`:
```js
function reveal(e, this){
    e.preventDefault();
    this.innerText = ALERT.classList.contains("hide") ? "Book Now!" : "Oops!" ;
    ALERT.classList.toggle("hide");
}
CTA.addEventListener("click", function(e) { reveal(e, this) });
```

## 08. Typing Speed Project

We can create an interval event using:
```js
interval = setInterval(runTimer, 10);
```
This interval can be stopped using:
```js
clearInterval(interval);
```
Note that we will use `interval = null;` if we want to completely remove the timer because if we do not remove the interval, we will accumulate processes.

## 09. Loops

Loops
* For
* While
* Do while
* Foreach

Keywords
* break
* continue
