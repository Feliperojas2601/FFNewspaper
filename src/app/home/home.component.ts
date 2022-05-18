import { Component, OnInit } from '@angular/core';
import { New } from '../model/new';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public news: New[] = [{name:'New 1',image:'../../assets/img/essay.jpg'}, 
  {name:'New 2',image:'../../assets/img/essay.jpg'},
  {name:'New 3',image:'../../assets/img/essay.jpg'}]; 

  constructor() { }

  ngOnInit(): void {}

}
