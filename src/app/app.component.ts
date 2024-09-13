import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SpreadsheetAllModule} from "@syncfusion/ej2-angular-spreadsheet";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SpreadsheetAllModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularExcel';
}
