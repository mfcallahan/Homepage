import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarImgLinksComponent } from './sidebar-img-links.component';

describe('SidebarImgLinksComponent', () => {
  let component: SidebarImgLinksComponent;
  let fixture: ComponentFixture<SidebarImgLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarImgLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarImgLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
