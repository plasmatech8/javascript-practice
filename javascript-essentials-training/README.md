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

Basic operators: +, -, *, /
Assignment operators: +=, -=, *=, /=, -- (before or after), ++  (before or after)

Comparison operators: == (value equality), === (type and value equality), etc
Logic operators: || (or), && (and)

Ternary operator: `condition ? 'value_if_true' : 'value_if_false'`

### Arrays

See `script.js`.
