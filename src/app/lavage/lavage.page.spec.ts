import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LavagePage } from './lavage.page';

describe('LavagePage', () => {
  let component: LavagePage;
  let fixture: ComponentFixture<LavagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LavagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
