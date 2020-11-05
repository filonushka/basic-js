const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Wrong argument!\'arr\'must be an Array!');

  const clone = [...arr];
  const [lastIndex, length] = [clone.lenght - 1, clone.length];
  const res = [];

  const actions = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];

  const NA = '--empty--';

  const specialValues = [...actions, NA];

  for (let i = 0; i < length; i++) {
    const curr = clone[i];

    if (!specialValues.includes(curr)) {
      res.push(curr);
      continue;
    }

    switch (curr) {
      case '--discard-next':
        if (i >= lastIndex) {
          continue;
        } else {
          clone[i + 1] = NA;
          i++;
        }
        break;

      case '--discard-prev':
        if (i === 0 || (clone[i - 1] === NA)) {
          continue;
        } else {
          res.pop();
        }
        break;

      case '--double-next':
        if (i >= lastIndex) {
          continue;
        } else {
          res.push(clone[i + 1]);
        }
        break;

      case '--double-prev':
        if (i === 0 || (clone[i - 1] === NA)) {
          continue;
        } else {
          res.push(clone[i - 1]);
        }
        break;

      case NA:
        continue;
        break;

    }

  }
  return res;
};
