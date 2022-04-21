import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter Class", () => {
  test("inherits the property from parent", () => {
    const newHtmlGreeter = new HtmlGreeter("Hello");
    expect(newHtmlGreeter.greeting).toBe("Hello");
  });
  test("to check default tagName property ", () => {
    const newHtmlGreeter = new HtmlGreeter("Hello");
    expect(newHtmlGreeter.tagName).toBe("h1");
  });
  test("to check tagName property i.e set by constructor", () => {
    const newHtmlGreeter = new HtmlGreeter("Hello", "div");
    expect(newHtmlGreeter.tagName).toBe("div");
  });
  test("to check the greet method returns a string", () => {
    const newHtmlGreeter = new HtmlGreeter("Hello");
    expect(newHtmlGreeter.greet("Nazima")).toBe("<h1>Hello, Nazima</h1>");
  });
});
