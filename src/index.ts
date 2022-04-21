// In index.ts, import each of 4 greeter classes and use them to console.log the greeting produced by each class, including the Greeter parent class

import { Greeter } from "./Greeter";
import { JavaScriptGreeter } from "./JavaScriptGreeter";
import { LoudGreeter } from "./LoudGreeter";
import { HtmlGreeter } from "./HtmlGreeter";
import { prompt } from "promptly";

const newGreeter = new Greeter("Hello");
console.log(newGreeter.greet("Nazima"));

const newJavaScriptGreeter = new JavaScriptGreeter("Hello");
console.log(newJavaScriptGreeter.greet("Nazima"));

const newLoudGreeter = new LoudGreeter("Hello");
console.log(newLoudGreeter.greet("Nazima"));

const newHtmlGreeter = new HtmlGreeter("Hello");
console.log(newHtmlGreeter.greet("Nazima"));

// const promptly = require("promptly");
// promptly("Enter your name....: ");
