"use strict";
/**
 * Checks if a string contains uppercase letters
 * @param value The string value to test
 * @returns Returns true if it contains uppercase
 */
const containsUpperCase = (value) => /[A-Z]/.test(value);
/**
 * Checks if a string contains lowercase letters
 * @param value The string value to test
 * @returns Returns true if it contains lowercase
 */
const containsLowerCase = (value) => /[a-z]/.test(value);
/**
 * Checks if a string contains digit/number (0-9)
 * @param value The string value to test
 * @returns Returns true if it contains digit/number
 */
const containsNumber = (value) => /[0-9]/.test(value);
/**
 * Checks if a string contains special character [!#$%&'()*+,-./:;<=>?@[\]^_{|}~]
 * @param value The string value to test
 * @returns Returns true if it contains special character
 */
const containsSpecialCharacter = (value) => /[!#$%&'()*+,-./:;<=>?@[\]^_{|}~]/.test(value);
//# sourceMappingURL=string.utilty.js.map