import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'single-button',
  styleUrls: ['./single-button.component.css'],
  template: `
    <div class="buttons">
      <button *ngIf="firstButton">
        {{ firstButton }}
      </button>
      <button *ngIf="secondButton">
        {{ secondButton }}
      </button>
    </div>
  `,
})
export class SingleButtonComponent implements OnInit {
  @Input('firstBtn') firstButton: any;
  @Input('secondBtn') secondButton: any;

  constructor() { }

  ngOnInit(): void {
  }

}
