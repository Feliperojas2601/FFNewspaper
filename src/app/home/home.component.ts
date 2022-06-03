import { Component, OnInit } from '@angular/core';
import { New } from '../model/new';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public news: New[] = [{name:'Deportations to begin.',image:'../../assets/img/trumpSlider.jpg'}, 
  {name:'An affair at UNAL.',image:'../../assets/img/sastoque.jpeg'},
  {name:"El panita's misfortune.",image:'../../assets/img/mina.jpeg'},
  {name:'Sugar, the health benefits.',image:'../../assets/img/sugar.jpg'}]; 

  constructor() { }

  ngOnInit(): void {}

}
