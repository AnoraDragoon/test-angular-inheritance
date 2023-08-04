import { Component, OnInit } from '@angular/core';
import { ParentPageComponent } from '../parent-page/parent-page.component';

@Component({
  selector: 'app-child-page',
  templateUrl: '../parent-page/parent-page.component.html',
  styleUrls: ['../parent-page/parent-page.component.scss']
})
export class ChildPageComponent extends ParentPageComponent {

  constructor() {
      super();
  }

  ngOnInit(): void {
    console.log('Init ChildPageComponent');
  }

}
