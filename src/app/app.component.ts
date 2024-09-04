import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OneComponent, TwoComponent, ThreeComponent, FourComponent, FiveComponent, PlaceHolderComponent, SixComponent, SevenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Deferrable_views';

  isVisible: boolean = false;

  show(){
    this.isVisible = true;
  }
}
