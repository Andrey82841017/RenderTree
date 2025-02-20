import { parseTree } from './parseTree.js';
import { createTree } from './createTree.js';

const renderButton = document.getElementById('button');
const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

function renderTree(input) {
  return (outputElement.innerHTML = createTree(input));
}
renderButton.addEventListener('click', function () {
  let dateInput = inputElement.value;
  const input = parseTree(dateInput);
  inputElement.value = '';

  return renderTree(input);
});
