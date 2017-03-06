import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { Router }            from '@angular/router';

import { HttpService, PagerService } from '../../services/index';
import { Post }                      from '../../shared/post.model';

@Component({
    selector: 'pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    posts: Post[];
    pager: any = {};
    pagedItems: any[];
    path = this.location.path().split('/');
    name = this.path[1];
    repo = this.path[2];
    url = `/${this.name}/${this.repo}/page/`;
    constructor(
        private router: Router,
        private location: Location,
        private httpService: HttpService,
        private pagerService: PagerService) {
        location.subscribe(() => this.setPage());
    }
    ngOnInit() {
        this.getPosts();
    }
    getPosts(): void {
        this.httpService.getPosts()
            .then(posts => {
                this.posts = posts;
                console.log(this.posts);
                this.setPage();
            });
    }
    // getCategory(category) {
    //     console.log(category);
    //     this.httpService.getCategory(category)
    //         .then(posts => {
    //             this.posts = posts;
    //             console.log(this.posts);
    //             this.setPage();
    //         });
    // }
    // updatePost(post) {
    //     this.httpService.update(post);
    // }
    setPage(page?): void {
        let path = this.location.path();
        if (!page && path.indexOf('/page/') > 0) {
            let num = path.split('/')[4];
            page = parseFloat(num);
        }
        this.pager = this.pagerService.getPager(this.posts.length, page);
        if (page < 1 || page > this.pager.totalPages) {
            this.router.navigate(['not-found']);
        }
        this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
        window.scrollTo(0, 0);
    }
}
