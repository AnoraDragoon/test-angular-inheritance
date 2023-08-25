import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { SingleParentService } from '../../services/single-parent.service';
import { StandardDepService } from '../../services/standard-dep.service';

@Component({
  selector: 'app-service-parent-page',
  templateUrl: './service-parent-page.component.html',
  styleUrls: ['./service-parent-page.component.scss']
})
export class ServiceParentPageComponent implements OnInit {

  constructor(protected logger: Logger, protected singleParentService: SingleParentService, protected standardDepService: StandardDepService) { }

  ngOnInit(): void {
  }



}
