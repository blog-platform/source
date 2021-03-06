import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalizeRouterService }  from 'localize-router';
import {
    AuthService,
    UserService,
    ToastService
} from '../../services';

@Component({
    selector: 'auth-profile',
    templateUrl: 'auth-profile.component.html',
    styleUrls: ['auth-profile.component.scss']
})
export class AuthProfileComponent implements OnInit {
    profile: any;
    logged = false;
    canEdit = false;
    dropdown = false;
    name = this.route.snapshot.params['name'];
    repo = this.route.snapshot.params['repo'];
    url = `/${this.name}/${this.repo}/`;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private userService: UserService,
                private localize: LocalizeRouterService,
                private authService: AuthService,
                private toastService: ToastService) { };

    ngOnInit(): void {
        this.login();
    }

    login(): void {
        if (this.authService.isLogged) {
            this.logged = true;
            this.profile = this.userService.getUser();
            this.userService
                .getPermission(this.name, this.repo, this.profile.login)
                .then(({ access }) => this.canEdit = access)
                .catch(error => this.toastService.showError(error));
        }
    }

    logout(): void {
        this.logged = false;
        this.authService.logout();
        this.router.navigate([this.localize.translateRoute('/')]);
    }

    get isLogged(): boolean {
        return this.authService.isLogged;
    }
}
