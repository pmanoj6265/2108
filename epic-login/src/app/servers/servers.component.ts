import { Component, OnInit } from '@angular/core';
import { ImageService} from '../shared/image.service';

@Component ({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private imageService: ImageService) {

  }

  ngOnInit() {
  }
}
