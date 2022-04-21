import { Greeter } from "./Greeter";

export class JavaScriptGreeter extends Greeter {
  //slide 92
  greet(name: string): string {
    return `console.log(${super.greet(name)})`;
  }
}
