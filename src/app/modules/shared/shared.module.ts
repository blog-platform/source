import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';
import { TranslateModule }      from '@ngx-translate/core';
import { LocalizeRouterModule } from 'localize-router';
import { CalendarModule }       from 'primeng/primeng';
import { DropdownModule }       from 'primeng/primeng';

import { components } from './components';
import { pipes }      from '../../pipes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TranslateModule,
        LocalizeRouterModule,
        CalendarModule,
        DropdownModule
    ],
    declarations: [
        ...components,
        ...pipes
    ],
    exports: [
        ...components,
        ...pipes
    ]
})
export class SharedModule { }
