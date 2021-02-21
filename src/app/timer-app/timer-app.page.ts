
// import { mobiscroll, MbscTimerOptions } from '@mobiscroll/angular';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { Storage } from '@ionic/storage';

interface Person {
  user: string;
  pass: number;
}


export interface CountdownTimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}


@Component({
  selector: 'app-timer-app',
  templateUrl: './timer-app.page.html',
  styleUrls: ['./timer-app.page.scss'],
})
export class TimerAppPage implements OnInit {

  @Input() timeInSeconds: number;
  timer: CountdownTimer;

  public personForm: FormGroup;
  public listOfPeople: Array<Person> = [];

  data: any;

  chosenSelector = this.dataService.getData();
  chosenExercise = this.dataService.getExercise();
  imagePiece = this.dataService.getImage();
  lostCalories = 37; //Average amount lost doing 5 mins of moderate exercise

  constructor(private route: Router, private dataService: DataService, private dataStorage: Storage, public fb: FormBuilder) { 
    this.initForm();
    this.pullData();
    this.dataService.setLost_calories(this.lostCalories);
  }


  incrementExercise(){
    var oldUser = this.chosenExercise+`:`;
    this.listOfPeople[this.chosenSelector].pass+=25;
    this.dataStorage.set(oldUser, {user: this.listOfPeople[this.chosenSelector].user, pass: this.listOfPeople[this.chosenSelector].pass});
    this.updateDB();
    
  }

  incrementCalories() {
    var calories = this.listOfPeople[0].user
    this.listOfPeople[0].pass+=37;
    this.dataStorage.set(calories, {user: this.listOfPeople[0].user, pass: this.listOfPeople[0].pass});
    this.updateDB();
  }

  incrementData() {
    this.incrementExercise();
    this.incrementCalories();
  }

  pullData(){
    this.listOfPeople = [];
    this.dataStorage.keys().then((keys) => {
      console.log(keys);

      keys.forEach((item) => {
        this.dataStorage.get(item).then((person) => {
          this.listOfPeople.push(person)
        })
      })
    });

  }


  initForm() {
    this.personForm = this.fb.group({
      user: [null, Validators.required],
      pass: [null, Validators.required]
    });
  }

  onFormSubmit() {
    console.log(this.listOfPeople)
    this.listOfPeople.push(this.personForm.value);
    this.updateDB();

  }

  updateDB(){
    this.listOfPeople.forEach((item) => {
      this.dataStorage.set(item.user,item)
      .then(() => {
        console.log('database updated');
        this.personForm.reset();
      })
      .catch(err => {console.log(err)})
      this.initForm();
    })
    
  }

    nextPage() {
      this.route.navigate(['/overview']);
    }

    hasFinished() {
      return this.timer.hasFinished;
    }
  
    initTimer() {
      if (!this.timeInSeconds) { this.timeInSeconds = 3; }
  
      this.timer = <CountdownTimer>{
        seconds: this.timeInSeconds,
        runTimer: false,
        hasStarted: false,
        hasFinished: false,
        secondsRemaining: this.timeInSeconds
      };
  
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    }
  
    startTimer() {
      this.timer.hasStarted = true;
      this.timer.runTimer = true;
      this.timerTick();
    }
  
    pauseTimer() {
      this.timer.runTimer = false;
    }
  
    resumeTimer() {
      this.startTimer();
    }
  
    timerTick() {
      setTimeout(() => {
        if (!this.timer.runTimer) { return; }
        this.timer.secondsRemaining--;
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
        if (this.timer.secondsRemaining > 0) {
          this.timerTick();
        } else {
          this.timer.hasFinished = true;
                
      this.dataService.setExercise(this.chosenExercise);
  
      this.incrementData();
  
      // this.dataService.incrementPData();
  
      this.nextPage();

        }
      }, 1000);
    }
  
    getSecondsAsDigitalClock(inputSeconds: number) {
      const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
      const hours = Math.floor(secNum / 3600);
      const minutes = Math.floor((secNum - (hours * 3600)) / 60);
      const seconds = secNum - (hours * 3600) - (minutes * 60);
      let hoursString = '';
      let minutesString = '';
      let secondsString = '';
      hoursString = (hours < 10) ? '0' + hours : hours.toString();
      minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
      secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
      return hoursString + ':' + minutesString + ':' + secondsString;
    }

  ngOnInit() {

    this.initTimer();
    console.log(`Seconds Chosen: ` + this.timeInSeconds);
    this.dataService.getData();    
    console.log(this.chosenSelector);
  console.log(this.chosenExercise);
  //^console.log all of the data from the dataservice, and then try to see if I can console.log the text for the chosen exercise

  }
  }