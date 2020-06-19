import { Component, OnInit, Input } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery-9';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage-radio-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input()
  options: NgxGalleryOptions[];
  @Input()
  images: NgxGalleryImage[];
  faCamera = faCamera;

  constructor() {}

  ngOnInit() {
    this.options = [
      {},
      { breakpoint: 500, width: '300px', height: '300px', thumbnailsColumns: 3 },
      { breakpoint: 300, width: '100%', height: '200px', thumbnailsColumns: 2 },
    ];

    this.images = environment.baseConfigs.radio.galleryImages;
  }
}
