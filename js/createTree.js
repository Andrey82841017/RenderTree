export function createTree(
  arr,
  indent = '',
  level = true,
  isLastValue = false
) {
  let output = '';

  if (!Array.isArray(arr)) {
    return 'данные не корректны';
  }

  let maxLengthValue = 0;

  const arrLengthValue = arr
    .filter((el) => !Array.isArray(el))
    .sort((a, b) => b.length - a.length);
  maxLengthValue = arrLengthValue[0].length;
  const filterNonArr = arr.filter((el) => !Array.isArray(el));
  const lastValue = filterNonArr.pop();

  for (let i = 0; i < arr.length; i++) {
    let prefix = '';
    let indention = '';

    if (arr[i].length < maxLengthValue) {
      prefix = '-'.repeat(maxLengthValue - arr[i].length);
      indention = ' '.repeat(maxLengthValue - arr[i].length);
    }

    if (arr[i] === lastValue && Array.isArray(arr[i + 1])) {
      isLastValue = true;
    }
    if (!Array.isArray(arr[i]) && Array.isArray(arr[i + 1])) {
      // Устанавливаем количество знаков"-" для ветвления

      output +=
        indent +
        (arr[i] !== undefined && arr[i] !== ' ' ? arr[i] : '') +
        prefix +
        '---+' +
        '\n';
    } else if (Array.isArray(arr[i])) {
      console.log(isLastValue);

      output += createTree(
        arr[i],
        indent + (level || isLastValue ? ' ' : '|') + indention + '   ',
        false,
        arr[i + 1]
      );
    } else {
      output += indent + arr[i] + '\n';
    }
  }

  return output;
}
