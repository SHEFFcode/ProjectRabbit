import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'app works!';
}
