import {NgModule} from '@angular/core';
import {CommonsLibSessionsComponent} from './commons-lib-sessions.component';
import {UserLoginFormComponent} from './user-login-form/user-login-form.component';

@NgModule({
    imports: [],

    declarations: [

        CommonsLibSessionsComponent,
        UserLoginFormComponent

    ],

    exports: [

        CommonsLibSessionsComponent,
        UserLoginFormComponent

    ]

})
export class CommonsLibSessionsModule {
}
