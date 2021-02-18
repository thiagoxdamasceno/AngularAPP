import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private loginService : LoginService, // NEW COM GUARD
    private router: Router  // NEW COM GUARD
  ) { }

  ngOnInit(): void {
   this.myForm = this.fb.group({
      email: [''],
      senha: [''] 
    })
  }

  public myForm: FormGroup;

  async submitForm() {
    try {
      const result = await this.loginService.postLogin(this.myForm.getRawValue());
      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  } 

}
