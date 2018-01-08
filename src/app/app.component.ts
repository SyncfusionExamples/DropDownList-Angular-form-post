import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Country } from './country';
/**
 * App Module
 */
@Component({
    selector: 'my-app',
    template: `
   <div class="col-lg-12 control-section">
    <div class="content-wrapper" style="margin: 70 auto; width: 300px;">
        <form id="formId" class="form-horizontal"> 
        <label> EJ2 DropDownList</label>
            <div class="form-group">
                <ej-dropdownlist id='games' #sample [dataSource]='sportsData' [value]='value' [fields]='fields' [placeholder]='waterMark' [width]='width' [popupHeight]='height'></ej-dropdownlist>
            </div>
            <label> Angular Select </label>
              <div class="form-group">
           <select name = "inputSpecie" id= "inputSpecie" class="form-control">
  <option *ngFor="let country of countries" value= {{country.id}}>
    {{country.name}}
  </option>
</select>
</div>
            <div class="row">
                <div style="float: left;margin: 0 10% 0 30%">
                    <button id="validateSubmit" class="e-btn" style="height: 35px;" type="submit">Submit</button>
                </div>
                <div>
                    <button id="resetbtn" class="e-btn" style="height: 35px;" type="reset">Reset</button>
                </div>
            </div>

        </form>
    </div>
</div>
    `,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    selectedCountry: Country;
    countries = [
        new Country(1, 'USA'),
        new Country(2, 'India'),
        new Country(3, 'Australia'),
        new Country(4, 'Brazil'),
        new Country(5, 'Russia')
    ];
    public sportsData: Object[] = [
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
    public fields: Object = { text: 'Game', value: 'Id' };
    // set the height of the popup element
    public height: string = '220px';
    // set the width of input element
    public width: string = '300px';
    // set the placeholder to DropDownList input element
    public waterMark: string = 'Select a game';


    private formValidator: FormValidatorModel;

    ngOnInit(): void {
        this.selectedCountry = this.countries[1];
        this.formValidator = {
            // Initialize custom placement
            customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {
                inputElement.parentElement.appendChild(errorElement);
            }
        };
        // Initialize form-validator
        let formObj: FormValidator;
        formObj = new FormValidator('#formId', this.formValidator);
    }
    onInput($event: any) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }
}
