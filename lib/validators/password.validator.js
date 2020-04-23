"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
function IsPasswordValid(property, validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "isLongerThan",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (!value) {
                        return false;
                    }
                    const relatedValue = args
                        .constraints[0];
                    if (relatedValue.mustContainUpperLetter) {
                        if (!containsUpperCase(value))
                            return false;
                    }
                    if (relatedValue.mustContainLowerLetter) {
                        if (!containsLowerCase(value))
                            return false;
                    }
                    if (relatedValue.mustContainNumber) {
                        if (!containsNumber(value))
                            return false;
                    }
                    if (relatedValue.mustContainSpecialCharacter) {
                        if (!containsSpecialCharacter(value))
                            return false;
                    }
                    return true; // you can return a Promise<boolean> here as well, if you want to make async validation
                },
            },
        });
    };
}
exports.IsPasswordValid = IsPasswordValid;
let PasswordValidation = class PasswordValidation {
    validate(value, args) {
        if (!value) {
            return false;
        }
        const relatedValue = args.constraints[0];
        if (relatedValue.mustContainUpperLetter) {
            if (!containsUpperCase(value))
                return false;
        }
        if (relatedValue.mustContainLowerLetter) {
            if (!containsLowerCase(value))
                return false;
        }
        if (relatedValue.mustContainNumber) {
            if (!containsNumber(value))
                return false;
        }
        if (relatedValue.mustContainSpecialCharacter) {
            if (!containsSpecialCharacter(value))
                return false;
        }
        return true;
    }
    defaultMessage(args) {
        var value = args.value;
        if (!value) {
            return "";
        }
        const relatedValue = args.constraints[0];
        if (relatedValue.mustContainUpperLetter) {
            if (!containsUpperCase(value))
                return "Password must conatin uppercase";
        }
        if (relatedValue.mustContainLowerLetter) {
            if (!containsLowerCase(value))
                return "Password must contain lowercase";
        }
        if (relatedValue.mustContainNumber) {
            if (!containsNumber(value))
                return "Password must contain number";
        }
        if (relatedValue.mustContainSpecialCharacter) {
            if (!containsSpecialCharacter(value))
                return "Password must contain special characters";
        }
        return "";
    }
};
PasswordValidation = __decorate([
    class_validator_1.ValidatorConstraint({ name: "passwordValidation", async: false })
], PasswordValidation);
exports.PasswordValidation = PasswordValidation;
//# sourceMappingURL=password.validator.js.map