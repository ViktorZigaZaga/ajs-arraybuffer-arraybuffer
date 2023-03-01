import ArrayBufferConverter from '../arrayBufferConverter';

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test('test return object', () => {
  const buffer = new ArrayBufferConverter();
  buffer.load(getBuffer());

  expect(buffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
