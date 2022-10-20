import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {

  @Input() lastIndex = 1;
  @Input() index = 0;

  @Output() readonly indexChange = new EventEmitter<number>();

  constructor() { }

  get leftButtonDisabled(): boolean {
    return this.index === 0;
  }

  get rightButtonDisabled(): boolean {
    return this.index === this.lastIndex;
  }

  public onArrowClick(step: number) {
    this.updateIndex(this.index + step);
  }

  private updateIndex(index: number) {
    if (this.index === index) {
      return;
    }

    this.index = index;
    this.indexChange.emit(index);
  }

}
