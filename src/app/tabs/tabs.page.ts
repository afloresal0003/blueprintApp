import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private route: Router) {
    this.nextPage();
  }
  nextPage() {
    this.route.navigate(['/tabs/tab1']);
  }
}
