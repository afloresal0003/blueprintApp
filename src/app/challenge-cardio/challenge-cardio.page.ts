import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-challenge-cardio',
  templateUrl: './challenge-cardio.page.html',
  styleUrls: ['./challenge-cardio.page.scss'],
})
export class ChallengeCardioPage implements OnInit {

  data: any;

  constructor(private dataService: DataService) { }

  currentEx = 'Jogging';
  selector = 1;
  imageLink = 'gnzSnBB.jpg';

  ngOnInit() {

    this.dataService.setExercise(this.currentEx);
    this.dataService.setData(this.selector);
    this.dataService.setImage(this.imageLink);
    console.log(this.selector, this.currentEx);
  }

}


//1 jogs, 2 planks, 3 pushups, 4 squats, 5 stretches;