import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'view-mode-button',
  templateUrl: './view-mode-button.component.html',
  styleUrls: ['./view-mode-button.component.css']
})
export class ViewModeButtonComponent implements OnInit {
  @Input('viewMode') viewMode: any;
  @Output() view = new EventEmitter();

  ngOnInit(): void { }

}
