import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCertsComponent } from './education-certs.component';

describe('EducationCertsComponent', () => {
  let component: EducationCertsComponent;
  let fixture: ComponentFixture<EducationCertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EducationCertsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
