import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thc-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact = {
    'contactName': 'Tiep Phan',
    'email': 'abc@deg.com',
    'facebook': 'facebook.com',
    'twitter': 'twitter.com',
    'website': 'tiepphan.com',
    'tel': '1234-5678-90'
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    console.log(formValue);
    // throw Error('something go wrong');
  }

}
