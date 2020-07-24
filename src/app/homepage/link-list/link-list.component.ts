import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss'],
})
export class LinkListComponent {
  @Input()
  title: string;
  @Input()
  links: Array<string>;
}
