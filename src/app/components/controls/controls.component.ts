// import { Component, Input }       from '@angular/core';
import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    trigger,
    state,
    style,
    transition,
    animate
}                                 from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpService, CommentsService }            from '../../services/index';
import { Post }                   from '../../shared/post.model';

@Component({
    selector: 'controls',
    templateUrl: 'controls.component.html',
    styleUrls: ['controls.component.scss'],
    animations: [
        trigger('controls', [
            state('in', style({ opacity: '1' })),
            transition('void => *', [
                style({ opacity: '0' }),
                animate(200)
            ]),
            transition('* => void', [
                animate(300, style({ opacity: '0' }))
            ])
        ])
    ]
})
export class ControlsComponent implements OnInit {
    @Input() post: Post;
    @Input() status: boolean;
    @Output() comments = new EventEmitter();
    user: any;
    hidden = true;
    confirm = true;
    popupText = 'Remove post?';
    popupComments: string;
    name = this.route.snapshot.params['name'];
    repo = this.route.snapshot.params['repo'];
    title = this.route.snapshot.params['title'];
    create = `/${this.name}/${this.repo}/create`;
    edit = `/${this.name}/${this.repo}/post/${this.title}/edit`;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private commentsService: CommentsService,
                private httpService: HttpService) {
    }

    ngOnInit() { }

    unLockComments() {
        this.togglePopup();
        this.popupComments = 'Enabling...';
        this.commentsService
            .unLockComments(this.name, this.repo, this.post.id)
            .then(() =>
                this.httpService.updateBlog(this.name, this.repo)
                    .subscribe(() => {
                        this.popupComments = 'Done!';
                        setTimeout(() => this.togglePopup(), 1500);
                        setTimeout(() => this.comments.emit(true), 1800);
                    })
            );

    }
    lockComments() {
        this.togglePopup();
        this.popupComments = 'Disabling...';
        this.commentsService
            .lockComments(this.name, this.repo, this.post.id)
            .then(() =>
                this.httpService.updateBlog(this.name, this.repo)
                    .subscribe(() => {
                        this.popupComments = 'Done!';
                        setTimeout(() => this.togglePopup(), 1500);
                        setTimeout(() => this.comments.emit(true), 1800);
                    })
            );
    }
    delete() {
        this.popupText = 'Deleting...';
        this.httpService
            .delete(this.name, this.repo, this.post.id, this.post.sha)
            .then(() =>
                this.httpService.updateBlog(this.name, this.repo)
                    .subscribe(() => {
                        this.popupText = 'Done!';
                        setTimeout(() => this.hidden = true, 1500);
                        setTimeout(() => this.router.navigate([`/${this.name}/${this.repo}`]), 1800);
                    })
            );
    }
    popupHandler(confirm) {
        if (confirm) {
            this.delete();
        } else {
            this.hidden = true;
        }
    }
    togglePopup() {
        this.confirm = !this.confirm;
        this.hidden = !this.hidden;
        this.popupComments = '';
    }
}
