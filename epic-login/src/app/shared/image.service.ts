import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
 visibleImages = [];
   getImages() {
    return this.visibleImages = Images.slice(0);
  }
  getImage(id: number) {
     return Images.slice(0).find(image => image.id === id);
  }
}
const Images = [
  {'id': 1, 'url': 'https://www.cloudwards.net/wp-content/uploads/2016/09/AmazonWebservices_Logo.svg_.png'},
  {'id': 2, 'url': 'http://media.bestofmicro.com/U/J/602443/original/Cloud-Azure.jpg'},
  {'id': 3, 'url': 'https://www.freebsdnews.com/wp-content/uploads/openstack.jpg'},
  {'id': 4, 'url': 'https://vickeryhill.com/wp-content/uploads/2015/11/Rackspace-Logo-png.png'}
]
