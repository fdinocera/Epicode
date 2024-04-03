// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-registrazione',
//   templateUrl: './registrazione.component.html',
//   styleUrls: ['./registrazione.component.scss']
// })
// export class RegistrazioneComponent {

// }


import { Component } from '@angular/core';
import { Form, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { passwordMatch } from '../../validators/password.validator';
import { User } from 'src/app/interface/user';

@Component({
    selector: 'app-registrazione',
    templateUrl: './registrazione.component.html',
    styleUrls: ['./registrazione.component.scss']
})
export class AppComponent {

    signupForm!: FormGroup;
    signup!: User

    constructor(private fb: FormBuilder) {
        this.signupForm = this.fb.group(
            {
                name: [null, [Validators.required]],
                surname: [null, [Validators.required]],
                password: [null, [Validators.required, passwordMatch()]],
                confPassword: [null, [Validators.required]],
                gender: [null, [Validators.required]],
                immagineProfilo: [null, [Validators.required]],
                bio: [null, [Validators.required]],
            },
            { validator: this.passwordMatchValidator }
        );
    }

    getFormControl(nomeControllo: string) {
        return this.signupForm.get(nomeControllo)
    }

    getErrorsC(name: string, error: string) {
        return this.signupForm.get(name)?.errors![error];
    }

    passwordMatchValidator(formGroup: FormGroup) {
        const passwordControl = formGroup.get('password');
        const password = passwordControl ? passwordControl.valid : null;
        const confirmPasswordControl = formGroup.get('confPassword');
        const confirmPassword = confirmPasswordControl ? confirmPasswordControl.value : null;

        return password === confirmPassword ? null : { 'passwordUnmatch': true }
    }

    submit() {
        this.signup = this.signupForm.value;
        console.log('valore form: ' + this.signup)
    }
}

