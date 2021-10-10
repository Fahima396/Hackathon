import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  contactPage!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.buildContactPage();
  }

    buildContactPage(){
      this.contactPage=this._formBuilder.group({
        email: ['', Validators.required],
        phone: ['',Validators.required],
      });
    }
  
     get email() {return this.contactPage.get('email');}
    get phone() {return this.contactPage.get('phone');}
  
    contactPageSub(){
      let formData = this.contactPage.value;
    }
  

  }

