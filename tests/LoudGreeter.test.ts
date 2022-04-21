import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("inherits the greeting property from parent", () => {
    const newLoudGreeter: LoudGreeter = new LoudGreeter("Hello");
    expect(newLoudGreeter.greeting).toBe("Hello");
  });
  test("greet is over writing the property 'extra !'", () => {
    const newLoudGreeter: LoudGreeter = new LoudGreeter("Hello");
    expect(newLoudGreeter.greet("Jakob")).toBe("Hello, Jakob!");
  });
  test("addVolume adds extra '!'s", () => {
    const newLoudGreeter: LoudGreeter = new LoudGreeter("Hello");
    newLoudGreeter.addVolume();
    expect(newLoudGreeter.greet("Jakob")).toBe("Hello, Jakob!!");
  });
  test("addVolume adds extra 2 '!'s", () => {
    const newLoudGreeter: LoudGreeter = new LoudGreeter("Hello");
    newLoudGreeter.addVolume();
    newLoudGreeter.addVolume();
    expect(newLoudGreeter.greet("Jakob")).toBe("Hello, Jakob!!!");
  });
});
