import { Component } from '@angular/core';

import { InnerTextDemoComponent } from './inner-text-demo/inner-text-demo.component';
import { StructuralDirectivesComponentComponent } from './structural-directives-component/structural-directives-component.component';
import { TwoWayBindingExampleComponent } from './two-way-binding-example/two-way-binding-example.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InnerTextDemoComponent,
    StructuralDirectivesComponentComponent,
    TwoWayBindingExampleComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
