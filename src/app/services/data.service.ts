import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private counter: number = 0;

  private data : any;

  private exercise : any;

  private calories: any;

  private imageLink: any;

  constructor() { 
  }

  incrementCounter() {
    this.counter ++;
  }

  setCounter() {
    this.counter = this.counter;
  }

  getCounter() {
    return this.counter;
  }

  
  setData(data) {
    this.data = data;
  }

  setExercise(exercise) {
    this.exercise = exercise;
  }
 
  setLost_calories(calories) {
    this.calories = calories;
  }

  setImage(imageLink) {
    this.imageLink = imageLink;
  }

  getData() {
    return this.data;
  }

  getExercise() {
    return this.exercise;
  }

  getLost_calories() {
    return this.calories;
  }

  getImage() {
    return this.imageLink
  }
}
