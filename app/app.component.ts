import { Component } from '@angular/core';

import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <router-outlet></router-outlet>
    `,
    directives: [NavbarComponent]
})
export class AppComponent { }
