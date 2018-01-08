import { NgModule } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-ng-buttons'; 
import { DropDownListModule } from '@syncfusion/ej2-ng-dropdowns'; 



@NgModule({
    imports: [
        ButtonModule, 
        DropDownListModule

    ],
     
    exports: [
        ButtonModule,
        DropDownListModule
    ]
})
export class SharedModule { }