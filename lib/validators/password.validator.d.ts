import { ValidationOptions, ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { PasswordValidationRequirement } from "../models/password-validation-requirement.model";
export declare function IsPasswordValid(property: PasswordValidationRequirement, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare class PasswordValidation implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): "" | "Password must conatin uppercase" | "Password must contain lowercase" | "Password must contain number" | "Password must contain special characters";
}
//# sourceMappingURL=password.validator.d.ts.map