import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-challenge-lower',
  templateUrl: './challenge-lower.page.html',
  styleUrls: ['./challenge-lower.page.scss'],
})
export class ChallengeLowerPage implements OnInit {

data: any;

  constructor(private dataService: DataService) { }

  currentEx = 'Squats';
  selector = 4;
  imageLink = '4xQciAB.png';

  ngOnInit() {
    this.dataService.setExercise(this.currentEx);
    this.dataService.setData(this.selector);
    this.dataService.setImage(this.imageLink);
    console.log(this.selector, this.currentEx);
  }

}
