import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-img-links',
  templateUrl: './sidebar-img-links.component.html',
  styleUrls: ['./sidebar-img-links.component.scss']
})
export class SidebarImgLinksComponent {
  @Input()
  title: string;
  @Input()
  links: Array<any>;

  constructor() {}
}
