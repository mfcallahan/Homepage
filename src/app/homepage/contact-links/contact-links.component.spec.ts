import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLinksComponent } from './contact-links.component';

describe('ContactLinksComponent', () => {
  let component: ContactLinksComponent;
  let fixture: ComponentFixture<ContactLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactLinksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
