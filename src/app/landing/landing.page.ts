import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { Storage } from '@ionic/storage';

import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

interface Person {
  user: string;
  pass: number;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})

export class LandingPage implements OnInit {

  public personForm: FormGroup;
  public listOfPeople: Array<Person> = [];

  constructor(private dataStorage: Storage, public fb: FormBuilder, private dataService: DataService, private route: Router) {
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

  nextPage() {
    this.route.navigate(['tabs']);
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

  generateFitPortfolio(){
    this.personForm = this.fb.group({
      user: ['Jogging:', Validators.required],
      pass: [0, Validators.required]
    });
    this.listOfPeople.push(this.personForm.value);
    this.updateDB();

    this.personForm = this.fb.group({
      user: ['Planks:', Validators.required],
      pass: [0, Validators.required]
    });
    this.listOfPeople.push(this.personForm.value);
    this.updateDB();

    this.personForm = this.fb.group({
      user: ['Pushups:', Validators.required],
      pass: [0, Validators.required]
    });
    this.listOfPeople.push(this.personForm.value);
    this.updateDB();

    this.personForm = this.fb.group({
      user: ['Squats:', Validators.required],
      pass: [0, Validators.required]
    });
    this.listOfPeople.push(this.personForm.value);
    this.updateDB();

    this.personForm = this.fb.group({
      user: ['Stretches:', Validators.required],
      pass: [0, Validators.required]
    });
    this.listOfPeople.push(this.personForm.value);
    this.updateDB();
    
    this.personForm = this.fb.group({
      user: ['Calories Lost:', Validators.required],
      pass: [0, Validators.required]
    });
    this.listOfPeople.push(this.personForm.value);
    this.updateDB();
    this.nextPage();
  }

  ngOnInit() {
  }

}
