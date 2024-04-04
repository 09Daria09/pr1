import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'] 
})
export class FormComponent {
  answers = [
    { type: 'yes', text: 'Да' },
    { type: 'no', text: 'Нет' }
  ];

  defaultAnswer: string = 'yes';
  defaultLanguage: string = 'en';

  formdata = {};
  
  isSubmited: boolean = false;

  submitForm(form: NgForm) {
    if (form.valid) {
      this.isSubmited = true; 
      this.formdata = form.value;
      console.log(this.formdata); 
    } else {
      this.markAllAsTouched(form);
    }
  }
  passwordsMatch(form: NgForm): boolean {
    const pass = form.value.pass;
    const confirmPass = form.value.confirmPass;
    return pass === confirmPass;
  }
  private markAllAsTouched(form: NgForm) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      control.markAsTouched();
    });
  }
}
