function collectStrings(obj) {
  if (typeof obj === 'string') return [obj];
  return Object
    .values(obj)
    .reduce((arr, v) => [...arr, ...collectStrings(v)], []);
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
