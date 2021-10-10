import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-family-page',
  templateUrl: './family-page.component.html',
  styleUrls: ['./family-page.component.css']
})
export class FamilyPageComponent implements OnInit {
  familyPage!: FormGroup;
   constructor(
     private _formBuilder: FormBuilder
   ){}

  

  ngOnInit(): void {
    this.buildFamilyPage();
  }

  buildFamilyPage(){
    this.familyPage=this._formBuilder.group({
      children: ['', Validators.required],
      old: ['',Validators.required],
    });
  }

   get children() {return this.familyPage.get('children');}
  get old() {return this.familyPage.get('old');}

  familyPageSub(){
    let formData = this.familyPage.value;
  }

}
