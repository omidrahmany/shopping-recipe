import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sectionName = 'recipe';

  // tslint:disable-next-line:typedef
  onDisplaySection(feature: string) {
    this.sectionName = feature;
  }
}
