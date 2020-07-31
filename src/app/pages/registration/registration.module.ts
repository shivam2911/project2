import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {RegistrationComponent} from "./registration.component";
import { HttpClientModule } from "@angular/common/http"

const REGISTRATION_ROUTE = [{path: "", component: RegistrationComponent}];

@NgModule({
    declarations: [RegistrationComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        
        RouterModule.forChild(REGISTRATION_ROUTE),
        
    ]
})
export class RegistrationModule {
}
