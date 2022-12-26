import { Component } from '@angular/core';

@Component({
  selector: 'app-giao-dich',
  templateUrl: './giao-dich.component.html',
  styleUrls: ['./giao-dich.component.css']
})
export class GiaoDichComponent {
  title: String | undefined;
  constructor(){}
  ngOnInit(): void{
    this.title = "Giao Dich";
  }
}
