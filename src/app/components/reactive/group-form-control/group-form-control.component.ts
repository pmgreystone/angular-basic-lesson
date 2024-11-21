import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-group-form-control',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './group-form-control.component.html',
  styleUrl: './group-form-control.component.css'
})
export class GroupFormControlComponent implements OnInit {

  logErrors() {
    console.log(this.profileForm.controls['firstName'].errors)
    console.log(this.profileForm.controls['lastName'].errors)
  }

  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(4)]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(4)]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  })
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.profileForm.value)
  }
}
