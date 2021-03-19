interface Element
  extends Node,
    Animatable,
    ChildNode,
    InnerHTML,
    NonDocumentTypeChildNode,
    ParentNode,
    Slottable {
  asDraggable(): DraggableElement;
}

declare var Element: {
  prototype: Element;
  new (): Element;
};
