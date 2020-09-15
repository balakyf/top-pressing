import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LavageRepassagePage } from './lavage-repassage.page';

describe('LavageRepassagePage', () => {
  let component: LavageRepassagePage;
  let fixture: ComponentFixture<LavageRepassagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavageRepassagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LavageRepassagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
