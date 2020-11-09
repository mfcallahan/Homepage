import { Link } from './link';

export class ImageLink extends Link {
  imgUrl: string;
  imgAlt: string;

  constructor(title: string, url: string, imgUrl: string, imgAlt: string) {
    super(title, url);

    this.imgUrl = imgUrl;
    this.imgAlt = imgAlt;
  }
}
