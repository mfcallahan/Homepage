import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageRadioComponent } from './homepage-radio.component';

describe('HomepageRadioComponent', () => {
  let component: HomepageRadioComponent;
  let fixture: ComponentFixture<HomepageRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageRadioComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
