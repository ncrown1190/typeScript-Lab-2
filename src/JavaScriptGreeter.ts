import { Greeter } from "./Greeter";

export class JavaScriptGreeter extends Greeter {
  // constructor(newGreeting: string) {
  //   super(newGreeting);
  // }
  //slide 92
  greet(name: string): string {
    return `console.log(${super.greet(name)})`;
  }
}

// export class JavaScriptGreeter extends Greeter {
//   //   greet(name: string): string {
//   //     return `console.log(${this.greet(name)})`;
//   // }
// }
