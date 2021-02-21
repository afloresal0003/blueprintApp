import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-challenge-stretch',
  templateUrl: './challenge-stretch.page.html',
  styleUrls: ['./challenge-stretch.page.scss'],
})
export class ChallengeStretchPage implements OnInit {

  data: any;

  constructor(private dataService: DataService) { }

  currentEx = 'Stretches';
  selector = 5;
  imageLink = 'EAHVDhz.jpg';
  ngOnInit() {
    this.dataService.setExercise(this.currentEx);
    this.dataService.setData(this.selector);
    this.dataService.setImage(this.imageLink);
    console.log(this.selector, this.currentEx);
  }

}
