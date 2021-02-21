import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimerAppPage } from './timer-app.page';

describe('TimerAppPage', () => {
  let component: TimerAppPage;
  let fixture: ComponentFixture<TimerAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimerAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
