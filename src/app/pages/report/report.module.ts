import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import { ModalModule } from 'ngx-bootstrap/modal';


import {ReportComponent} from "./report.component";
import { HttpClientModule } from "@angular/common/http"

const Report_ROUTE = [{path: "", component:ReportComponent}];

@NgModule({
    declarations: [ReportComponent],
    imports: [
        ModalModule.forRoot(),
        CommonModule,
        FormsModule,
        HttpClientModule, 
        
        RouterModule.forChild(Report_ROUTE),
        
    ]
})
export class ReportModule {
}
