import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

export interface CarouselContext {
  $implicit: string;
  controller: {
    next: () => void;
    prev: () => void;
  };
}

@Component({
  selector: 'paginator-carousel',
  templateUrl: './paginator-carousel.component.html',
  styleUrls: ['./paginator-carousel.component.scss']
})
export class PaginatorCarouselComponent implements OnInit {
  public timerId: number | null = null;
  public context: CarouselContext | null = null;
  public index = 0;

  constructor(
    private templateRef: TemplateRef<CarouselContext>,
    private viewContainer: ViewContainerRef) { }

  @Input('carouselFrom') images!: string[];

  ngOnInit() {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    };

    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }

  next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }

    (<CarouselContext>this.context).$implicit = this.images[this.index];
  }

  prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    (<CarouselContext>this.context).$implicit = this.images[this.index];
  }
}
