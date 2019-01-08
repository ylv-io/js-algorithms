function stringifyNumbers(obj) {
  if (!Object.keys(obj).length) return {};

  const key = Object.keys(obj)[0];
  const { [key]: val, ...left } = obj;

  if (Number.isInteger(val)) {
    obj[key] = String(val);
  } else if (typeof val === 'object') {
    obj[key] = stringifyNumbers(val);
  }

  return {
    ...obj,
    ...stringifyNumbers(left),
  };
}

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
