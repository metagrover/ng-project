import { Component } from '@angular/core';

import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavbarComponent]
})
export class AppComponent { }
