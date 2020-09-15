import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepassagePage } from './repassage.page';

describe('RepassagePage', () => {
  let component: RepassagePage;
  let fixture: ComponentFixture<RepassagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepassagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepassagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
