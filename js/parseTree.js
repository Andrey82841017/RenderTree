export function parseTree(date) {
  let stack = [];
  let currentArray = [];
  let currentNumber = '';
  for (let i = 0; i < date.length; i++) {
    if (date[0] !== '(') {
      return 'не корректный ввод';
    }

    let char = date[i];
    if (char === '(') {
      if (currentNumber) {
        currentArray.push(currentNumber.trim());
        currentNumber = '';
      }
      let newArray = [];
      currentArray.push(newArray);
      stack.push(currentArray);

      currentArray = newArray;
    } else if (char === ')') {
      if (currentNumber) {
        currentArray.push(currentNumber.trim());
        currentNumber = '';
      }
      currentArray = stack.pop();
    } else if (char === ' ') {
      if (currentNumber) {
        currentArray.push(currentNumber.trim());
        currentNumber = '';
      }
    } else {
      currentNumber += char;
    }
  }
  if (currentNumber) {
    currentArray.push(currentNumber.trim());
  }
  return currentArray.length === 1 ? currentArray[0] : currentArray;
}
