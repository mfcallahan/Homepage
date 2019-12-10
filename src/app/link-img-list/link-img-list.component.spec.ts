import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkImgListComponent } from './link-img-list.component';

describe('LinkImgListComponent', () => {
  let component: LinkImgListComponent;
  let fixture: ComponentFixture<LinkImgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinkImgListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkImgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
