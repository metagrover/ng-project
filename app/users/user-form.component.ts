import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';

@Component({
    templateUrl: 'app/users/user-form.component.html'
})
export class UserFormComponent {
    form: ControlGroup;

    constructor(builder: FormBuilder) {
        this.form = builder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: [],
            address: builder.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }
}
