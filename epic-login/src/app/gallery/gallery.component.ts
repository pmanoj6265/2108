import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ImageService} from '../shared/image.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  image: any
  @Input()
  visibleImages: any[] = [];
  constructor(private imageService: ImageService,
              private route: ActivatedRoute) {
   this.visibleImages = this.imageService.getImages();
  }
  ngOnInit() {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    );
  }
}
