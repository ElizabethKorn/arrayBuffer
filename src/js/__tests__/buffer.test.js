import ArrayBufferConverter from "../buffer";
import { getBuffer } from "../buffer";

test("load and convert buffer to string", () => {
  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();
  converter.load(buffer);
  const result = converter.toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test("toString returns empty string if buffer is empty", () => {
  const converter = new ArrayBufferConverter();
  const emptyBuffer = new ArrayBuffer(0);
  converter.load(emptyBuffer);
  const result = converter.toString();
  expect(result).toBe("");
});

test("toString should work correctly for single characters", () => {
  const converter = new ArrayBufferConverter();
  const buffer = new ArrayBuffer(2);
  const view = new Uint16Array(buffer);
  view[0] = "A".charCodeAt(0);
  converter.load(buffer);
  const result = converter.toString();
  expect(result).toBe("A");
});
