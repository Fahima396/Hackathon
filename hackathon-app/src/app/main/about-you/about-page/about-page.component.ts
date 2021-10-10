import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-about-page',
  templateUrl:'./about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
   aboutPage!: FormGroup;
   constructor(
     private _formBuilder: FormBuilder
   ){}

  ngOnInit(): void {
    this.buildAboutPage();
  }

  buildAboutPage(){
    this.aboutPage=this._formBuilder.group({
      age: ['', Validators.required],
      retire: ['',Validators.required],
      earn: ['', Validators.required]
    });
  }

   get age() {return this.aboutPage.get('age');}
  get retire() {return this.aboutPage.get('retire');}
  get earn() {return this.aboutPage.get('earn');}

  aboutPageSub(){
    let formData = this.aboutPage.value;
  }
}
