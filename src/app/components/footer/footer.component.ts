import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.css'],
  template: `
    <footer>
      <p>
          &copy; 
          <span id="footer-year">{{footerYear}}</span> | 
          <a href="https://github.com/OkiemuteGold" target="_blank">
              Okiemute Gold
          </a>
      </p>

      <ul>
          <li><a href="">Privacy</a></li>
          <li><a href="">Terms</a></li>
          <li><a href="">Contact</a></li>
      </ul>
    </footer>
  `,
})
export class FooterComponent implements OnInit {
  footerYear: any;

  constructor() { }

  updateFooter() {
    let fullCopyrightYear;
    const date = new Date();
    const currentYear = date.getFullYear();
    currentYear > 2021 ? 
      fullCopyrightYear = `2021 - ${currentYear}` : 
      fullCopyrightYear = currentYear;
    
    this.footerYear = fullCopyrightYear;
  }
  
  ngOnInit(): void {
    this.updateFooter();
  }

}
