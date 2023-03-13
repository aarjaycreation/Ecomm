import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductByDateComponent } from './view-all-product-by-date.component';

describe('ViewAllProductByDateComponent', () => {
  let component: ViewAllProductByDateComponent;
  let fixture: ComponentFixture<ViewAllProductByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllProductByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllProductByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
