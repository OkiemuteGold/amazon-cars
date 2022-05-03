import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isClicked: boolean = false;

  navLinks = [
    {
      link: 'about',
      name: 'About'
    },
    {
      link: 'howItWorks',
      name: 'How It Works'
    },
    {
      link: 'products',
      name: 'Products'
    },
  ]
  
  mobileToggler() {
    this.isClicked = !this.isClicked;
  }

  ngOnInit(): void {}

}
