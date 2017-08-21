import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RackSpaceComponent } from './rack-space.component';

describe('RackSpaceComponent', () => {
  let component: RackSpaceComponent;
  let fixture: ComponentFixture<RackSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RackSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RackSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
