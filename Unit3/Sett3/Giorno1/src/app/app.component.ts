import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from './interface/user';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    form!: FormGroup;

    nomeForm = ''

    constructor(private fb: FormBuilder) { }


    ngOnInit() {
        this.form = this.fb.group({
            nome: this.fb.control(null, [Validators.required]),
            cognome: this.fb.control(null, [Validators.required])
        });

        this.form.valueChanges.subscribe((status) => {
            console.log('Stato del form: ', status);
        });
    }

    getFormC(nome: string) {
        return this.form.get(nome)
    }

    getErrorsC(nome: string, error: string) {
        return this.form.get(nome)?.errors![error];
    }


    submit() {
        this.nomeForm=this.form.value
        console.log('valore form: ' + this.form.value)
        //this.nomeForm = this.form.get('nome');
    }


}
