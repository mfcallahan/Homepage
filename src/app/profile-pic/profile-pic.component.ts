import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent {
  @Input()
  pic: string;
  @Input()
  name: string;
  @Input()
  tagLine: string;

  constructor() {}
}
