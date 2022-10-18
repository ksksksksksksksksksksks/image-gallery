import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

export interface CarouselContext {
  $implicit: string;
  controller: {
    next: () => void;
    prev: () => void;
  };
}

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('appCarouselFrom') images!: string[];

  public context: CarouselContext | null = null;
  public index = 0;

  constructor(
    private templateRef: TemplateRef<CarouselContext>,
    private viewContainer: ViewContainerRef) { }

  ngOnInit() {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.getNext(),
        prev: () => this.getPrevious()
      }
    };

    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }

  getNext() {
    this.index++;
    (<CarouselContext>this.context).$implicit = this.images[this.index];
  }

  getPrevious() {
    this.index--;
    (<CarouselContext>this.context).$implicit = this.images[this.index];
  }

}
