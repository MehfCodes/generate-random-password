# What is it ?

> random-password-generation is a library for generating random password.

## Install

```bash
$ npm install random-password-generation
```

## Usage

#### `generatePassword({options})`

Generate one password with the given options. Returns a string.

```javascript
import generatePassword from 'random-password-generation';

let password = generatePassword({
  characterAmount: 12,
  includeUppercase: true,
  includeNumbers: true,
  includeSymbols: true,
});
```

### Options

Any of these can be passed into the options object for each function.

| Name             | Description                            | Default Value |
| ---------------- | -------------------------------------- | ------------- |
| characterAmount  | amount of charcters in password.       | 10            |
| includeUppercase | use the uppercase letters in password. | false         |
| includeNumbers   | use the digits in password.            | true          |
| includeSymbols   | use the symbols in password.           | false         |
