import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpService }            from '../../services/index';
import { Post }                   from '../../shared/post.model';


@Component({
    selector: 'post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.scss']
})
export class PostComponent implements OnInit {
    post: Post;
    hidden = true;
    popupText = 'deleted...';
    name = this.route.snapshot.params['name'];
    repo = this.route.snapshot.params['repo'];
    title = this.route.snapshot.params['title'];
    url = `/${this.name}/${this.repo}/post/${this.title}`;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private httpService: HttpService) {
    }

    ngOnInit(): void {
        this.getPost();
    }
    getPost() {
        this.route.params
        .switchMap(({ name, repo, title }) =>
            this.httpService.getPost(name, repo, title))
            .subscribe(post => this.post = post);
    }
    delete() {
        this.hidden = false;
        this.httpService
            .delete(this.name, this.repo, this.post.id, this.post.sha)
            .then(() => {
                this.popupText = 'done!';
                setTimeout(() => this.hidden = true, 1500);
                setTimeout(() => this.router.navigate([`/${this.name}/${this.repo}`]), 1800);
            });
    }
    goBack(): void {
        let loadPage = localStorage.getItem('page') ? localStorage.getItem('page') : '1';
        this.router.navigate([`/${this.name}/${this.repo}/page/${loadPage}`]);
        localStorage.removeItem('page');
        // this.location.back();
    }
}
