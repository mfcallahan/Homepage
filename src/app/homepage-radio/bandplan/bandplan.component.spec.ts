import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandplanComponent } from './bandplan.component';

describe('BandplanComponent', () => {
  let component: BandplanComponent;
  let fixture: ComponentFixture<BandplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BandplanComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
