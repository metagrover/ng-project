import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
    template: `
        <h1>Users</h1>
        <a class="btn btn-primary" routerLink="/users/new">New User</a><br><br>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let user of users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td><i class="glyphicon glyphicon-edit"></i></td>
                    <td><i class="glyphicon glyphicon-remove"></i></td>
                </tr>
            </tbody>
        </table>
    `
})
export class UsersComponent implements OnInit {
    users: any[];

    constructor(private _userService: UserService) {}

    ngOnInit() {
        this._userService.getUsers().subscribe(users => this.users = users);
    }
}
