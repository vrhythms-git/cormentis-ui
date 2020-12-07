import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(private router:Router) { }

  users = ['abc','xyz'];
    // Technologies: [
    //   'Machine Learning',
    //   'Design',
    //   'AI'
    // ],
    // Education: [
    //   'Machine Learning',
    //   'Design',
    //   'AI'
    // ],
    // Companies: [
    //   'Machine Learning',
    //   'Design',
    //   'AI'
    // ]
  


  ngOnInit(): void {
  }

  search(){
    this.router.navigate(['/second']);
  }
}
