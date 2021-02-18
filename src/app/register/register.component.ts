import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  hide = true;

  constructor(
    private fb: FormBuilder,
    private rest: RegisterService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  createUser(){
    this.rest.postRegister(this.registerForm.getRawValue()).subscribe(result => {});
    //console.log(this.registerForm.value);
    this.registerForm.reset();
  }

}
