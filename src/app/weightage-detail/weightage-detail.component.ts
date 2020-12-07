import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  weightage: number;
  keyword: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { keyword: 'Enterprise User Engagement Plan', weightage: 0.58 },
  { keyword: 'Institute Academic Award', weightage: 0.57 },
  { keyword: 'Smart India Hackathon Winner', weightage: 0.57 },
  { keyword: 'Enterprise User Engagement Plan', weightage: 0.58 },
  { keyword: 'Institute Academic Award', weightage: 0.57 },
  { keyword: 'Smart India Hackathon Winner', weightage: 0.57 }
]

@Component({  
  selector: 'app-weightage-detail',
  templateUrl: './weightage-detail.component.html',
  styleUrls: ['./weightage-detail.component.scss']
})

export class WeightageDetailComponent implements OnInit {

  displayedColumns: string[] = ['keyword', 'weightage'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  
  ngOnInit(): void {
  }

}
