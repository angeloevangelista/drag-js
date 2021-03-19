export class DraggableElement {
  private _nextX = 0;
  private _nextY = 0;
  private _currentX = 0;
  private _currentY = 0;

  private _isDragEnable = false;
  get isDragEnable(): boolean {
    return this._isDragEnable;
  }

  _element: HTMLElement | null = null;
  get element(): HTMLElement | null {
    return this._element;
  }

  get nextX() {
    return this._nextX;
  }
  set nextX(value: number) {
    this._nextX = value;
    this._reposition();
  }

  get nextY() {
    return this._nextY;
  }
  set nextY(value) {
    this._nextY = value;
    this._reposition();
  }

  constructor(domElement: HTMLElement) {
    this._isDragEnable = true;
    this._element = domElement;

    this._setElementProps();
  }

  _setElementProps() {
    if (!this._element) {
      console.error('DragJsError: Element not found.');
      return;
    }

    this._element.classList.add('draggable');
    this._element.dataset.drag = 'true';
    this._element.style.position = 'absolute';
    this._element.onmousedown = this._dragMouseDown;
  }

  _dragMouseDown = (event: MouseEvent) => {
    event = event || window.event;
    event.preventDefault();

    this._currentX = event.clientX;
    this._currentY = event.clientY;

    document.onmouseup = this._removeDragEvent;

    document.onmousemove = (event) => {
      event = event || window.event;
      event.preventDefault();

      this._nextX = this._currentX - event.clientX;
      this._nextY = this._currentY - event.clientY;

      this._reposition();
    };
  };

  _removeDragEvent() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  _reposition() {
    if (!this._element) {
      console.error('DragJsError: Element not found.');
      return;
    }

    this._element.style.top = `${this._element.offsetTop - this._nextY}px`;
    this._element.style.left = `${this._element.offsetLeft - this._nextX}px`;

    this._currentX -= this.nextX;
    this._currentY -= this.nextY;
  }

  disableDrag() {
    if (!this._element) {
      console.error('DragJsError: Element not found.');
      return;
    }

    this._isDragEnable = false;
    this._element.onmousedown = null;

    this._element.dataset.drag = 'false';
    this._element.classList.remove('draggable');
  }

  enableDrag() {
    this._setElementProps();
    this._isDragEnable = true;
  }
}
