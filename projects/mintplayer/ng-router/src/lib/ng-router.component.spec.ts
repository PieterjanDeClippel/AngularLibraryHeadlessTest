import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRouterComponent } from './ng-router.component';

describe('NgRouterComponent', () => {
  let component: NgRouterComponent;
  let fixture: ComponentFixture<NgRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
