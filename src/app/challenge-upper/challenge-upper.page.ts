import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-challenge-upper',
  templateUrl: './challenge-upper.page.html',
  styleUrls: ['./challenge-upper.page.scss'],
})
export class ChallengeUpperPage implements OnInit {

  data: any;

  constructor(private dataService: DataService) { }

  currentEx = 'Pushups';
  selector = 3;
  imageLink = '25rBOM2.jpg';
  ngOnInit() {
    this.dataService.setExercise(this.currentEx);
    this.dataService.setData(this.selector);
    this.dataService.setImage(this.imageLink);
    console.log(this.selector, this.currentEx);
  }

}
