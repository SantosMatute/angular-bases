import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola Mundo';

  public counter: number = 10;
  increaseBy (value:number): void{
    this.counter += value;
  }

  reset () {
    this.counter = 10;
  }
}
