import './styles/drag-js.scss';

import { DraggableElement } from './draggable-element';

HTMLElement.prototype.asDraggable = function asDraggable() {
  return new DraggableElement(this);
};
