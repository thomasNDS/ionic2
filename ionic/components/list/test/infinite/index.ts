import {ProtoViewRef, ViewContainerRef} from 'angular2/core'
import {Directive, Host, forwardRef} from 'angular2/core';

import {App, List} from 'ionic/ionic';



@App({
  templateUrl: 'main.html',
  directives: [forwardRef(() => ItemCellTemplate)]
})
class E2EApp {
  constructor() {

    this.items = []
    for(let i = 0; i < 1000; i++) {
      this.items.push({
        title: 'Item ' + i
      })
    }
  }
}


/*
  Used to find and register headers in a view, and this directive's
  content will be moved up to the common navbar location, and created
  using the same context as the view's content area.
*/
@Directive({
  selector: 'template[cell]'
})
export class ItemCellTemplate {
  constructor(@Host() list: List, viewContainer: ViewContainerRef, protoViewRef: ProtoViewRef) {
    console.log('Item cell template', list, viewContainer, protoViewRef);

    this.protoViewRef = protoViewRef;
    this.viewContainer = viewContainer;

    list.setItemTemplate(this);
  }
}
