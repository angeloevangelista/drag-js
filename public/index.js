document.addEventListener('DOMContentLoaded', start);

function start() {
  const switchButton = document.querySelector('button');

  let draggableElement = null;

  switchButton?.addEventListener('click', function switchBoxDrag() {
    if (!draggableElement) {
      draggableElement = document.querySelector('.box')?.asDraggable();
      this.innerHTML = 'Disable';
      return;
    }

    let nextButtonText = '';

    if (draggableElement.isDragEnable) {
      draggableElement.disableDrag();
      nextButtonText = 'Enable';
    } else {
      draggableElement.enableDrag();
      nextButtonText = 'Disable';
    }

    this.innerHTML = nextButtonText;
  });
}
