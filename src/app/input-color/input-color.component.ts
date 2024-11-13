import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-color',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-color.component.html',
  styleUrl: './input-color.component.css'
})
export class InputColorComponent {
  inputColor: String = 'blue'
  inputColorDisabled: Boolean = false
}
