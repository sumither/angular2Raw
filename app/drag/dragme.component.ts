import { Component, HostBinding } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'dragme.component.html',
  styles: [ '.draggable1 { border: none; float: left;  } .dropZone1 { float: left; min-width: 175px; min-height: 200px; border: 1px solid rgb(204, 204, 204); }' ]
})
export class DragmeComponent {
  private dragStart(e) {
    e.dataTransfer.effectAllowed = "none";
    setTimeout(() => {
      let dragImageUrl = 'images/small-portrait_mini.jpg';
      if(dragImageUrl != 'none') {
        var dragImage = document.createElement('img');
        dragImage.src = dragImageUrl;
        dragImage.width = 75;
        e.dataTransfer.setDragImage(dragImage, 0, 0);
      }
    }, 1);

    e.dataTransfer.setData('text/html', (new Date()).toLocaleString());
    e.target.style.border = "1px solid #cccccc";
  }
  private dragEnd(e) {
    e.target.style.border = "none";
  }
  private dragEnter(e) {
    e.target.style.border = "2px dashed #00cc00";
  }
  private dragOver(e) {
    e.preventDefault();
  }
  private dragLeave(e) {
    e.target.style.border = "1px solid #cccccc";
  }
  private drop(e) {
    var data = e.dataTransfer.getData('text/html');
    e.target.style.border = "1px solid #cccccc";
    e.target.innerHTML = data;
    e.preventDefault();
  }

  private dblclickme(e) {
    e.defaultPrevented = true;
    e.target.innerHTML = (new Date()).toLocaleString();
    e.preventDefault();
  }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */