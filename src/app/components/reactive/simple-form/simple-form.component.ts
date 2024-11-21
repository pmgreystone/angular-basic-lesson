import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.css'
})
export class SimpleFormComponent {
  name = new FormControl('')

  updateName(value: string) {
    this.name.setValue(value)
  }

  constructor() {}
  ngOnInt() {
  }
}
