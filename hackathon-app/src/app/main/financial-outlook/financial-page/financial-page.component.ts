import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-financial-page',
  templateUrl: './financial-page.component.html',
  styleUrls: ['./financial-page.component.css']
})
export class FinancialPageComponent implements OnInit {
  financialPage!: FormGroup;
   constructor(
     private _formBuilder: FormBuilder
   ){}

  

  ngOnInit(): void {
    this.buildFinancialPage();
  }

  buildFinancialPage(){
    this.financialPage=this._formBuilder.group({
      income: ['', Validators.required],
      savings: ['',Validators.required],
      retire: ['', Validators.required],
      investment: ['', Validators.required],

    });
  }

   get income() {return this.financialPage.get('income');}
  get savings() {return this.financialPage.get('savings');}
  get retire() {return this.financialPage.get('retire');}
  get investment() {return this.financialPage.get('investment');}


  financialPageSub(){
    let formData = this.financialPage.value;
  }

}
