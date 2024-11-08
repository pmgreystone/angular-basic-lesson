import { Component } from '@angular/core';

import { InnerTextDemoComponent } from './inner-text-demo/inner-text-demo.component';
import { StructuralDirectivesComponentComponent } from './structural-directives-component/structural-directives-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InnerTextDemoComponent,
    StructuralDirectivesComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
