import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  pageTitle: string = 'Progressbar';
  pageSubTitle: string = 'Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.';

  type: string;
  stacked: any[] = [];

  randomStacked(): void {
    let types = ['success', 'info', 'warning', 'danger'];

    this.stacked = [];
    let n = Math.floor(Math.random() * 4 + 1);
    for (let i = 0; i < n; i++) {
      let index = Math.floor(Math.random() * 4);
      let value = Math.floor(Math.random() * 27 + 3);
      this.stacked.push({
        value,
        type: types[index]
      });
    }
  }

  constructor() {
    this.randomStacked();
  }

  ngOnInit() {
  }

}
