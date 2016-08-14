import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private url = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http: Http) {}

    getUsers() {
        return this.http.get(this.url)
                   .map(response => response.json());
    }
}
