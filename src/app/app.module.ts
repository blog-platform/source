import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { HttpModule }                from '@angular/http';

// import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
// import { InMemoryDataService }    from './shared/in-memory-data.service';

import { AppRoutingModule }          from './app-routing.module';
import { HttpService, PagerService } from './services/index';

import { AppComponent }              from './app.component';
import { PostsComponent }            from './components/posts/posts.component';
import { PostComponent }             from './components/post/post.component';
import { PaginationComponent }       from './components/pagination/pagination.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        PostsComponent,
        PostComponent,
        PaginationComponent
    ],
    providers: [
        HttpService,
        PagerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
