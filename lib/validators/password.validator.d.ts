import { ValidationOptions, ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { PasswordValidationRequirement } from "../models/password-validation-requirement.model";
export declare class StringUtilities {
    /**
     * Checks if a string contains uppercase letters
     * @param value The string value to test
     * @returns Returns true if it contains uppercase
     */
    static containsUpperCase(value: string): boolean;
    /**
     * Checks if a string contains lowercase letters
     * @param value The string value to test
     * @returns Returns true if it contains lowercase
     */
    static containsLowerCase(value: string): boolean;
    /**
     * Checks if a string contains digit/number (0-9)
     * @param value The string value to test
     * @returns Returns true if it contains digit/number
     */
    static containsNumber(value: string): boolean;
    /**
     * Checks if a string contains special character [!#$%&'()*+,-./:;<=>?@[\]^_{|}~]
     * @param value The string value to test
     * @returns Returns true if it contains special character
     */
    static containsSpecialCharacter(value: string): boolean;
}
export declare function IsPasswordValid(property: PasswordValidationRequirement, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare class PasswordValidation implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): "" | "Password must conatin uppercase" | "Password must contain lowercase" | "Password must contain number" | "Password must contain special characters";
}
//# sourceMappingURL=password.validator.d.ts.map