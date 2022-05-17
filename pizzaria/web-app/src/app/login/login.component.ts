import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.criaForm();
  }

  criaForm(): void {
    this.form = this.formBuilder.group({
      email: [, Validators.email]
    })
  }

  login(): void {
    console.log(this.form);
  }

}
