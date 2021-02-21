import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-challenge-new',
  templateUrl: './challenge-new.page.html',
  styleUrls: ['./challenge-new.page.scss'],
})
export class ChallengeNewPage implements OnInit {

data: any;

  constructor(private dataService: DataService) { }

  currentEx = 'Planks';
  selector = 2;
  imageLink = 'dv8MvXn.jpg';

  ngOnInit() {
    this.dataService.setExercise(this.currentEx);
    this.dataService.setData(this.selector);
    this.dataService.setImage(this.imageLink);
    console.log(this.selector, this.currentEx);
  }

}
