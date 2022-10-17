import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorCarouselComponent } from './paginator-carousel.component';

describe('PaginatorCarouselComponent', () => {
  let component: PaginatorCarouselComponent;
  let fixture: ComponentFixture<PaginatorCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
