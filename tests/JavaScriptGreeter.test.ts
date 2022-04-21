import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter", () => {
  test("inherits the greeting property from parent", () => {
    const newJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "Hello"
    );
    expect(newJavaScriptGreeter.greeting).toBe("Hello");
  });
  test("inherits the greeting property from parent", () => {
    const newJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "How are You?"
    );
    expect(newJavaScriptGreeter.greeting).toBe("How are You?");
  });
  test("overridden method can call the parent version", () => {
    const newJSGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    expect(newJSGreeter.greet("Jakob!")).toBe("console.log(Hello, Jakob!)");
  });
  test("overridden method can call the parent version", () => {
    const newJSGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "Good morning"
    );
    expect(newJSGreeter.greet("All")).toBe("console.log(Good morning, All)");
  });
});

// describe("JavaScript greeter", () => {
//     test("Inherits the greeting property from parent", () => {
//         // arrange
//         let newGreeting = new JavaScriptGreeter("Hello")
//         // assert
//         expect(newGreeting.greeting).toBe("Hello")
//     })
// })
