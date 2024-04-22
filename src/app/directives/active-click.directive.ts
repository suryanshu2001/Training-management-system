import { Directive,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickableItem]'
})
export class ClickableItemDirective {
  @HostBinding('class.showArrow') isClicked: boolean = false;

  @HostListener('click') onClick() {
    this.isClicked = !this.isClicked;
  }
}

@Directive({
  selector: '[appActiveClick]'
})
export class ActiveClickDirective {
  private static currentClickedItem: ClickableItemDirective | null = null;

  constructor(private clickableItem: ClickableItemDirective) {}

  @HostListener('click') onClick() {
    if (ActiveClickDirective.currentClickedItem) {
      ActiveClickDirective.currentClickedItem.isClicked = false;
    }
    this.clickableItem.isClicked = true;
    ActiveClickDirective.currentClickedItem = this.clickableItem;
  }
}
