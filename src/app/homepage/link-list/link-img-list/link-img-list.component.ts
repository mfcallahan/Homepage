import { Component, Input } from '@angular/core';
import { LinkListComponent } from '../link-list.component';

@Component({
  selector: 'app-link-img-list',
  templateUrl: './link-img-list.component.html',
  styleUrls: ['./link-img-list.component.scss'],
})
export class LinkImgListComponent extends LinkListComponent {
  @Input()
  leftColSize: number;
  @Input()
  rightColSize: number;

  constructor() {
    super();
  }
}
