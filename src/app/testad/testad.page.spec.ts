import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestadPage } from './testad.page';

describe('TestadPage', () => {
  let component: TestadPage;
  let fixture: ComponentFixture<TestadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
