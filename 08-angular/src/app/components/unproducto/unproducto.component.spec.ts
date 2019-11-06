import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnproductoComponent } from './unproducto.component';

describe('UnproductoComponent', () => {
  let component: UnproductoComponent;
  let fixture: ComponentFixture<UnproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
