import { Component, OnInit, Input } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage-radio-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
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
      { breakpoint: 300, width: '100%', height: '200px', thumbnailsColumns: 2 }

      // orig:
      // {
      //   width: '600px',
      //   height: '400px',
      //   thumbnailsColumns: 4,
      //   imageAnimation: NgxGalleryAnimation.Slide
      // },
      // {
      //   breakpoint: 800,
      //   width: '100%',
      //   height: '600px',
      //   imagePercent: 80,
      //   thumbnailsPercent: 20,
      //   thumbnailsMargin: 20,
      //   thumbnailMargin: 20
      // },
      // {
      //   breakpoint: 400,
      //   preview: false
      // }
    ];

    this.images = environment.baseConfigs.radio.galleryImages;
  }
}
