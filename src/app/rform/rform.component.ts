import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  form!: FormGroup;
  isSubmited = false;
  formdata: any;

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormGroup({ 
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', Validators.required),
      }),
      lang: new FormControl('en'),
      answ: new FormControl('no'),
    });
  }

  onSubmit() {
    this.isSubmited = true; 
    this.formdata = this.form.value; 
    console.log('Form Data', this.formdata);
  }
}
