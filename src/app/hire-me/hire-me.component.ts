import { Component } from '@angular/core';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { CommonModule } from '@angular/common';
import { ContactTFormComponent } from './contact-t-form/contact-t-form.component';

@Component({
    selector: 'app-hire-me',
    standalone: true,
    templateUrl: './hire-me.component.html',
    styleUrl: './hire-me.component.css',
    imports: [ContactFormComponent,CommonModule,ContactTFormComponent]
})
export class HireMeComponent {

  formFlag:boolean = true;
  formType:string = this.formFlag ? 'Reactive' : 'Template Driven';

  onClick () {
    this.formFlag = !this.formFlag
    this.formType = this.formFlag ? 'Reactive' : 'Template Driven';
  }

}
