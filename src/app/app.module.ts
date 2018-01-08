import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map'; 
// import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DropDownListAllModule } from '@syncfusion/ej2-ng-dropdowns';

import { SharedModule } from './shared.module';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        DropDownListAllModule, 
        HttpModule, 
        JsonpModule,
        SharedModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent], 
})
export class AppModule { }