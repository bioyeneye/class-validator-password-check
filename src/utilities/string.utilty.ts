/**
 * Checks if a string contains uppercase letters
 * @param value The string value to test
 * @returns Returns true if it contains uppercase 
 */
const containsUpperCase = (value: string) => /[A-Z]/.test(value);

/**
 * Checks if a string contains lowercase letters
 * @param value The string value to test
 * @returns Returns true if it contains lowercase 
 */
const containsLowerCase = (value: string) => /[a-z]/.test(value);

/**
 * Checks if a string contains digit/number (0-9)
 * @param value The string value to test
 * @returns Returns true if it contains digit/number 
 */
const containsNumber = (value: string) => /[0-9]/.test(value);

/**
 * Checks if a string contains special character [!#$%&'()*+,-./:;<=>?@[\]^_{|}~]
 * @param value The string value to test
 * @returns Returns true if it contains special character 
 */
const containsSpecialCharacter = (value: string) => /[!#$%&'()*+,-./:;<=>?@[\]^_{|}~]/.test(value);