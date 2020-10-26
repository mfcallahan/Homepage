import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-img-list',
  templateUrl: './link-img-list.component.html',
  styleUrls: ['./link-img-list.component.scss'],
})
export class LinkImgListComponent {
  @Input()
  leftColSize: number;
  @Input()
  rightColSize: number;
  @Input()
  title: string;
  @Input()
  links: Array<any>;

  constructor() {}
}
