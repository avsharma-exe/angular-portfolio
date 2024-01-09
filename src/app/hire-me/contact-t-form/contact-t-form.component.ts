import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatchPasswordDirective } from '../../util/match-password.directive';

@Component({
  selector: 'app-contact-t-form',
  standalone: true,
  imports: [FormsModule, CommonModule, MatchPasswordDirective],
  templateUrl: './contact-t-form.component.html',
  styleUrl: './contact-t-form.component.css'
})
export class ContactTFormComponent {
  form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
