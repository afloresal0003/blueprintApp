import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { Storage } from '@ionic/storage';

interface Person {
  user: string;
  pass: number;
}


@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  public personForm: FormGroup;
  public listOfPeople: Array<Person> = [];

  data: any;

  overviewCalories = this.dataService.getLost_calories();
  overviewExercise = this.dataService.getExercise();

  constructor(private dataService: DataService, private dataStorage: Storage, public fb: FormBuilder) {     
    this.initForm();
    this.pullData();
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

  ngOnInit() {

  }

}