import { Component } from '@angular/core';
import { SingleParentPageComponent } from '../../../parent/pages/single-parent-page/single-parent-page.component';

@Component({
  selector: 'app-child-page',
  templateUrl: '../../../parent/pages/single-parent-page/single-parent-page.component.html',
  styleUrls: ['../../../parent/pages/single-parent-page/single-parent-page.component.scss']
})
export class ChildPageComponent extends SingleParentPageComponent {

  constructor() {
      super();
  }

  ngOnInit(): void {
    console.log('Init ChildPageComponent');
  }

}
