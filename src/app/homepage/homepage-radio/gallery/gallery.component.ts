import { Component, OnInit, Input } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery-9';

@Component({
  selector: 'app-homepage-radio-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input()
  galleryOptions: NgxGalleryOptions[];
  @Input()
  galleryImages: NgxGalleryImage[];
  faCamera = faCamera;

  constructor() {}

  ngOnInit() {
    this.setGalleryOptions();
    this.setGalleryImages();
  }

  private setGalleryOptions() {
    this.galleryOptions = [
      {},
      { breakpoint: 500, width: '300px', height: '300px', thumbnailsColumns: 3 },
      { breakpoint: 300, width: '100%', height: '200px', thumbnailsColumns: 2 },
    ];
  }

  private setGalleryImages() {
    this.galleryImages = [
      {
        small: 'assets/images/truck1.thumb.png',
        medium: 'assets/images/truck1.png',
        big: 'assets/images/truck1.png',
      },
      {
        small: 'assets/images/shack1.thumb.png',
        medium: 'assets/images/shack1.png',
        big: 'assets/images/shack1.png',
      },
      {
        small: 'assets/images/shack2.thumb.png',
        medium: 'assets/images/shack2.png',
        big: 'assets/images/shack2.png',
      },
      {
        small: 'assets/images/shack3.thumb.png',
        medium: 'assets/images/shack3.png',
        big: 'assets/images/shack3.png',
      },
      {
        small: 'assets/images/shack4.thumb.png',
        medium: 'assets/images/shack4.png',
        big: 'assets/images/shack4.png',
      },
      {
        small: 'assets/images/shack5.thumb.png',
        medium: 'assets/images/shack5.png',
        big: 'assets/images/shack5.png',
      },
      {
        small: 'assets/images/shack6.thumb.png',
        medium: 'assets/images/shack6.png',
        big: 'assets/images/shack6.png',
      },
      {
        small: 'assets/images/shack7.thumb.png',
        medium: 'assets/images/shack7.png',
        big: 'assets/images/shack7.png',
      },
    ];
  }
}
