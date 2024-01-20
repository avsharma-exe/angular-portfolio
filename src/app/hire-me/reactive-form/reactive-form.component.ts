import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../../util/mobile.validaror';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {


  reactiveForm : FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup ({
      orgName : new FormControl(null,[Validators.required, Validators.minLength(2)]),
      fullName : new FormControl(null,[Validators.required, Validators.minLength(2)]),
      email : new FormControl(null,[Validators.required, Validators.email]),
      phoneNumber : new FormControl(null,[Validators.required, CustomValidators.checkMobile])
    })
  }


  resetForm() {
    this.reactiveForm.reset();
  }

  onSubmit() {
    console.log(this.reactiveForm)
  }
}
