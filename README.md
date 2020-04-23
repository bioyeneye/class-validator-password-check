# class-validator-password-check
Password Validator using class-validator

## Installation

#### Module installation

``` sh
$ npm install class-validator-password-check --save
$ yarn add class-validator-password-check
```

(or the short way):

`npm i -S class-transformer-validator`

#### Peer dependencies

This package is only a simple plugin/wrapper, so you have to install the required modules too because it can't work without them. See detailed installation instruction for the modules installation:

- [class-validator](https://github.com/pleerock/class-validator#installation)


```ts
import { PasswordValidation, PasswordValidationRequirement } from 'class-validator-password-check'

var passwordRequirement: PasswordValidationRequirement = {
    mustContainLowerLetter: true,
    mustContainNumber: true,
    mustContainSpecialCharacter: true,
    mustContainUpperLetter: true
}

export class UserRegisterDto {

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Validate(PasswordValidation, [passwordRequirement])
    readonly password: string;
    
}
```

License
----

MIT
