import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';
import {ActivatedRoute} from '@angular/router';

@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: any
  @Input()
  visibleImages: any[] = [];
  constructor(private imageService: ImageService,
              private route: ActivatedRoute) {
    this.visibleImages = this.imageService.getImages();
  }
  ngOnInit() {
    this.images = this.imageService.getImage(
      +this.route.snapshot.params['id']
    );
  }
}
