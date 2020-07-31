import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {ViewComponent} from "./View.component";
import { HttpClientModule } from "@angular/common/http"

const View_ROUTE = [{path: "", component: ViewComponent}];

@NgModule({
    declarations: [ViewComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule, 
        
        RouterModule.forChild(View_ROUTE),
        
    ]
})
export class ViewModule {
}
