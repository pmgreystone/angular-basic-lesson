import { Component } from '@angular/core';
import { MatButtonModule,MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-material-button',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,CommonModule],
  templateUrl: './material-button.component.html',
  styleUrl: './material-button.component.css'
})
export class MaterialButtonComponent {

  isFavorite: Boolean

  constructor() {
    this.isFavorite = false
  }

  buttonClicked(event: Event) {
  }
}
