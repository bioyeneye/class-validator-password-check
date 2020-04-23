import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { PasswordValidationRequirement } from "../models/password-validation-requirement.model";

export function IsPasswordValid(
  property: PasswordValidationRequirement,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isLongerThan",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (!value) {
            return false;
          }

          const relatedValue = args
            .constraints[0] as PasswordValidationRequirement;

          if (relatedValue.mustContainUpperLetter) {
            if (!containsUpperCase(value)) return false;
          }

          if (relatedValue.mustContainLowerLetter) {
            if (!containsLowerCase(value)) return false;
          }

          if (relatedValue.mustContainNumber) {
            if (!containsNumber(value)) return false;
          }

          if (relatedValue.mustContainSpecialCharacter) {
            if (!containsSpecialCharacter(value)) return false;
          }

          return true; // you can return a Promise<boolean> here as well, if you want to make async validation
        },
      },
    });
  };
}

@ValidatorConstraint({ name: "passwordValidation", async: false })
export class PasswordValidation implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    if (!value) {
      return false;
    }

    const relatedValue = args.constraints[0] as PasswordValidationRequirement;

    if (relatedValue.mustContainUpperLetter) {
      if (!containsUpperCase(value)) return false;
    }

    if (relatedValue.mustContainLowerLetter) {
      if (!containsLowerCase(value)) return false;
    }

    if (relatedValue.mustContainNumber) {
      if (!containsNumber(value)) return false;
    }

    if (relatedValue.mustContainSpecialCharacter) {
      if (!containsSpecialCharacter(value)) return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    var value = args.value;
    if (!value) {
      return "";
    }

    const relatedValue = args.constraints[0] as PasswordValidationRequirement;

    if (relatedValue.mustContainUpperLetter) {
      if (!containsUpperCase(value)) return "Password must conatin uppercase";
    }

    if (relatedValue.mustContainLowerLetter) {
      if (!containsLowerCase(value)) return "Password must contain lowercase";
    }

    if (relatedValue.mustContainNumber) {
      if (!containsNumber(value)) return "Password must contain number";
    }

    if (relatedValue.mustContainSpecialCharacter) {
      if (!containsSpecialCharacter(value)) return "Password must contain special characters";
    }

    return "";
  }
}
