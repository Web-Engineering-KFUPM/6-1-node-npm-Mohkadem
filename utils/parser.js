import _ from "lodash";

export function parseNumbers(input) {
  const numbers = _.map(input, (str) => Number(str));
  return _.compact(numbers);
}

export function isValidOperation(operation) {
  const valid_ops = ["add", "subtract", "multiply", "divide"];
  return _.includes(valid_ops, operation);
}
