import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName :string []= ['Spiderman','Iroman','Hulk','She Hulk', 'Thor']

  public deleteHero?:string;

  removeLastHero ():void {
    this.deleteHero = this.heroName.pop();
  }

}
