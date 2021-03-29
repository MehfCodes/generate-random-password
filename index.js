function getChars(start, end) {
  let chars = [];
  for (let i = start; i <= end; i++) {
    chars.push(String.fromCharCode(i));
  }
  return chars;
}

const upperCaseChars = getChars(65, 90);
const lowerCaseChars = getChars(97, 122);
const numberChars = getChars(48, 57);
const symbolChars = getChars(33, 47)
  .concat(getChars(58, 64))
  .concat(getChars(91, 96))
  .concat(getChars(123, 126));

function generatePassword({
  characterAmount = 10,
  includeUppercase = false,
  includeNumbers = true,
  includeSymbols = false,
} = {}) {
  let charCodes = lowerCaseChars;
  let passwordChars = [];
  if (!characterAmount) characterAmount = 10;
  if (includeUppercase) charCodes = charCodes.concat(upperCaseChars);
  if (includeSymbols) charCodes = charCodes.concat(symbolChars);
  if (includeNumbers) charCodes = charCodes.concat(numberChars);
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];

    passwordChars.push(characterCode);
  }

  return passwordChars.join('');
}

let pass = generatePassword({
  characterAmount: 12,
  includeUppercase: true,
  includeNumbers: true,
  includeSymbols: true,
});

// module.exports = generatePassword;
export default generatePassword;
