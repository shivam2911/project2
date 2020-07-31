import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import { ModalModule } from 'ngx-bootstrap/modal';


import {ShowComponent} from "./show.component";
import { HttpClientModule } from "@angular/common/http"

const Show_ROUTE = [{path: "", component: ShowComponent}];

@NgModule({
    declarations: [ShowComponent],
    imports: [
        ModalModule.forRoot(),
        CommonModule,
        FormsModule,
        HttpClientModule, 
        
        RouterModule.forChild(Show_ROUTE),
        
    ]
})
export class ShowModule {
}
