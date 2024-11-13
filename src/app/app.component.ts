import { Component } from '@angular/core';

import { InnerTextDemoComponent } from './inner-text-demo/inner-text-demo.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { InputColorComponent } from './input-color/input-color.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InnerTextDemoComponent,
    StructuralDirectivesComponent,
    InputColorComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
