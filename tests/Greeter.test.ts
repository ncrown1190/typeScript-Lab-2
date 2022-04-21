import { Greeter } from "../src/Greeter";

describe("Greeting", () => {
  test("hello outputs hello", () => {
    // arrange
    let newGreeter = new Greeter("Hello");
    // assert
    expect(newGreeter.greeting).toBe("Hello");
  });
  test("the greet method returns a sentence", () => {
    // arrange
    let newGreeter = new Greeter("Hello");
    // assert
    expect(newGreeter.greet("Jakob")).toBe("Hello, Jakob");
  });
});
