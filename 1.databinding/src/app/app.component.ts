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

<<<<<<< HEAD
  number_a: number = 0;
  number_b: number = 0;
  hiddenRes: boolean  = false;
  hiddenWarn: boolean = false;
  warnMessage: string = 'Warning! Please enter the all numbers';



  onClickEquals() {
    if (!this.number_a && !this.number_b) {
      this.setResultVisible(false);
      return;
    }
    this.setResultVisible(true);
  }

  onInputHandle(evt) {
    const inputId = evt.target.id;

    this.filterInput(evt);

    this.onChange(evt);

    if (inputId=='num_a') {
      this.number_a = +evt.target.value;
      return;
    }
    this.number_b = +evt.target.value;
  }



  private onChange(evt) {
  	const inputId = evt.target.id;

  	if (String.isNullOrEmpty(evt.target.value)) {
      this.setResultVisible(false);
      #equals.disabled = true;
      if(inputId=='num_a') {
          this.number_a = undefined;
          return;
      }
      this.number_b = undefined;
      return;
    }

    #equals.disabled = false;
    this.hiddenWarn = false;
    this.hiddenRes = false;
  }

  private setResultVisible(value: boolean) {
    this.hiddenRes = value;
    this.hiddenWarn = !this.hiddenRes;
  }

  private filterInput(evt) {
    evt.target.value = evt.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  }

=======
>>>>>>> dev
}
