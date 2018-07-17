import { Component } from '@angular/core';

// extension to String
module String {
    export function isNullOrEmpty(s: string): boolean {
        return !s;
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'My dummy calculator';

}
