import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    country: ['', Validators.required],
    dob: ['', Validators.required],
    address: [''],
    gender: ['', Validators.required],
    permission: ['', Validators.required]
  });

  saveForm() {
    console.log('Form Data is', this.profileForm.value);
    this.profileForm.reset();
  }
}
