import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
    selector: 'app-hire-me',
    standalone: true,
    templateUrl: './hire-me.component.html',
    styleUrl: './hire-me.component.css',
    imports: [CommonModule, TemplateFormComponent, ReactiveFormComponent]
})
export class HireMeComponent {
  @ViewChild('switcher') switcherButton: ElementRef;
  formFlag:boolean = false;
  formType:string = this.formFlag ? 'Reactive' : 'Template Driven';

  onClick () {
    this.formFlag = !this.formFlag;
    this.switcherButton.nativeElement.classList.add('disabled');
    setTimeout(()=>{
      this.switcherButton.nativeElement.classList.remove('disabled');
    },2000)
    this.formType = this.formFlag ? 'Reactive' : 'Template Driven';
  }

}
