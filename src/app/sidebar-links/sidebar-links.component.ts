import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-links',
  templateUrl: './sidebar-links.component.html',
  styleUrls: ['./sidebar-links.component.scss']
})
export class SidebarLinksComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  links: Array<string>;

  constructor() {}

  ngOnInit() {}
}
