import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding-example.component.html',
  styleUrl: './two-way-binding-example.component.css'
})
export class TwoWayBindingExampleComponent {
  username = "default_greystone"

  showInput() {
    alert(this.username);
  }
}
