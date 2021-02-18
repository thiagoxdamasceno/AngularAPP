import { Component, OnInit } from '@angular/core';
import { PlanService } from '../services/plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})

export class PlanComponent implements OnInit {

  planos: any;

  panelOpenState = false;

  constructor(
    private planService: PlanService
  ) { }
  

  ngOnInit(): void {
    this.planService.getPlans().subscribe( 
      (data) => {
        this.planos = data['planos'];
        console.log(this.planos);
      }, (error) => {
        console.log(error);
      }
      );
  }

}
