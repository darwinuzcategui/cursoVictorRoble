import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnvenddorComponent } from './unvenddor.component';

describe('UnvenddorComponent', () => {
  let component: UnvenddorComponent;
  let fixture: ComponentFixture<UnvenddorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnvenddorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnvenddorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
