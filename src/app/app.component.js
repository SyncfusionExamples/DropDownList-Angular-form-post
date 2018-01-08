"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ej2_inputs_1 = require("@syncfusion/ej2-inputs");
var country_1 = require("./country");
/**
 * App Module
 */
var AppComponent = (function () {
    function AppComponent() {
        this.countries = [
            new country_1.Country(1, 'USA'),
            new country_1.Country(2, 'India'),
            new country_1.Country(3, 'Australia'),
            new country_1.Country(4, 'Brazil'),
            new country_1.Country(5, 'Russia')
        ];
        this.sportsData = [
            { Id: 'Game1', Game: 'American Football' },
            { Id: 'Game2', Game: 'Badminton' },
            { Id: 'Game3', Game: 'Basketball' },
            { Id: 'Game4', Game: 'Cricket' },
            { Id: 'Game5', Game: 'Football' },
            { Id: 'Game6', Game: 'Golf' },
            { Id: 'Game7', Game: 'Hockey' },
            { Id: 'Game8', Game: 'Rugby' },
            { Id: 'Game9', Game: 'Snooker' },
            { Id: 'Game10', Game: 'Tennis' }
        ];
        // maps the appropriate column to fields property
        this.fields = { text: 'Game', value: 'Id' };
        // set the height of the popup element
        this.height = '220px';
        // set the width of input element
        this.width = '300px';
        // set the placeholder to DropDownList input element
        this.waterMark = 'Select a game';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.selectedCountry = this.countries[1];
        this.formValidator = {
            // Initialize custom placement
            customPlacement: function (inputElement, errorElement) {
                inputElement.parentElement.appendChild(errorElement);
            }
        };
        // Initialize form-validator
        var formObj;
        formObj = new ej2_inputs_1.FormValidator('#formId', this.formValidator);
    };
    AppComponent.prototype.onInput = function ($event) {
        $event.preventDefault();
        console.log('selected: ' + $event.target.value);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n   <div class=\"col-lg-12 control-section\">\n    <div class=\"content-wrapper\" style=\"margin: 70 auto; width: 300px;\">\n        <form id=\"formId\" class=\"form-horizontal\"> \n        <label> EJ2 DropDownList</label>\n            <div class=\"form-group\">\n                <ej-dropdownlist id='games' #sample [dataSource]='sportsData' [value]='value' [fields]='fields' [placeholder]='waterMark' [width]='width' [popupHeight]='height'></ej-dropdownlist>\n            </div>\n            <label> Angular Select </label>\n              <div class=\"form-group\">\n           <select name = \"inputSpecie\" id= \"inputSpecie\" class=\"form-control\">\n  <option *ngFor=\"let country of countries\" value= {{country.id}}>\n    {{country.name}}\n  </option>\n</select>\n</div>\n            <div class=\"row\">\n                <div style=\"float: left;margin: 0 10% 0 30%\">\n                    <button id=\"validateSubmit\" class=\"e-btn\" style=\"height: 35px;\" type=\"submit\">Submit</button>\n                </div>\n                <div>\n                    <button id=\"resetbtn\" class=\"e-btn\" style=\"height: 35px;\" type=\"reset\">Reset</button>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</div>\n    ",
        encapsulation: core_1.ViewEncapsulation.None
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map