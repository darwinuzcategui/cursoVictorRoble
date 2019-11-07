import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoNewComponent } from './producto-new.component';

describe('ProductoNewComponent', () => {
  let component: ProductoNewComponent;
  let fixture: ComponentFixture<ProductoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
