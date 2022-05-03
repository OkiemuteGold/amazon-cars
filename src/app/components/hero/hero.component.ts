import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Output() first = 'Explore';
  @Output() second = 'Products';

  num: number = 1;
  total: number = 6;
  clearChange: any;

  carNames = [
    'Rose Royce Red',
    'Honda Accord',
    'Toyota Corolla',
    'Porsche',
    'Jaguar',
    'Rose Royce Black'
  ]
  
  updateImageUrl() {
    this.clearChange = setInterval(()=>{
      this.num === this.total ? 
        this.num = 1 : this.num += 1;
    }, 5000)
  };

  stopTimeout() {
    clearInterval(this.clearChange)

    console.log(this.clearChange, typeof this.clearChange);
  };

  startTimeout() {
    this.updateImageUrl();
  };

  ngOnInit(): void {
    this.startTimeout();
  }

}
