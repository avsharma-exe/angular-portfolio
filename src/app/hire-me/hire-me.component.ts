import { Component } from '@angular/core';
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
    selector: 'app-hire-me',
    standalone: true,
    templateUrl: './hire-me.component.html',
    styleUrl: './hire-me.component.css',
    imports: [ContactFormComponent]
})
export class HireMeComponent { }
