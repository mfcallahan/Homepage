import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCertLinksComponent } from './education-cert-links.component';

describe('EducationCertLinksComponent', () => {
  let component: EducationCertLinksComponent;
  let fixture: ComponentFixture<EducationCertLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationCertLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCertLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
