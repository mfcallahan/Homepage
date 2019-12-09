import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedLinksComponent } from './featured-links.component';

describe('FeaturedLinksComponent', () => {
  let component: FeaturedLinksComponent;
  let fixture: ComponentFixture<FeaturedLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
