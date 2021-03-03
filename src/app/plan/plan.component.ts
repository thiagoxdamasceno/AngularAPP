import { Component, OnInit } from '@angular/core';
import { PlanService } from '../services/plan.service';
import { LoginService } from '../services/login.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})

export class PlanComponent implements OnInit {

  form: any = {
  };

  planos: any;

  currentUser: any;

  panelOpenState = false;

  alert:boolean = false;


  constructor(
    private planService: PlanService,
    private loginService: LoginService,
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);

    this.planService.getPlans().subscribe( 
      (data) => {
        this.planos = data['planos'];
        console.log(this.planos);
      }, (error) => {
        console.log(error);
      }
      );
  }

  onSubmit(): void {
    const { id_plano } = this.form;
    this.loginService.updateUserPlan(id_plano, this.currentUser).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );

    this.alert = true;
  } 

  closeAlert() {
    this.alert= false;
  }

}